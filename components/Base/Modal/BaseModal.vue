<script lang="ts">
import type { ButtonProps } from '@nuxt/ui'

export interface BaseModalEntity {
  title?: string
  description?: string
  overlay?: boolean
  transition?: boolean
  fullscreen?: boolean
  portal?: string | false | true | HTMLElement
  close?: boolean | Partial<ButtonProps>
  closeIcon?: string
  dismissible?: boolean
  open?: boolean
  defaultOpen?: boolean
  modal?: boolean
  ui?: {
    overlay?: string | string[]
    content?: string | string[]
    header?: string | string[]
    wrapper?: string | string[]
    body?: string | string[]
    footer?: string | string[]
    title?: string | string[]
    description?: string | string[]
    close?: string | string[]
  }
}
</script>

<script setup lang="ts">
withDefaults(defineProps<BaseModalEntity>(), {
  overlay: true,
  transition: true,
  portal: true,
  close: true,
  dismissible: true,
  modal: true
})

defineSlots<{
  default(props: { open: boolean }): unknown
  content(props: { close: () => void }): unknown
  header(props: { close: () => void }): unknown
  title(): unknown
  description(): unknown
  actions(): unknown
  close(props: { close: () => void; ui: object }): unknown
  body(props: { close: () => void }): unknown
  footer(props: { close: () => void }): unknown
}>()

const emit = defineEmits<{
  (e: 'after:leave' | 'after:enter' | 'close:prevent'): void
  (e: 'update:open', value: boolean): void
}>()
</script>

<template>
  <UModal
    :title="title"
    :description="description"
    :overlay="overlay"
    :transition="transition"
    :fullscreen="fullscreen"
    :portal="portal"
    :close="close"
    :close-icon="closeIcon"
    :dismissible="dismissible"
    :open="open"
    :default-open="defaultOpen"
    :modal="modal"
    :ui="{
      overlay: [ui?.overlay],
      content: [ui?.content],
      header: [ui?.header],
      wrapper: [ui?.wrapper],
      body: [ui?.body],
      footer: [ui?.footer],
      title: [ui?.title],
      description: [ui?.description],
      close: [ui?.close]
    }"
    @after:leave="emit('after:leave')"
    @after:enter="emit('after:enter')"
    @close:prevent="emit('close:prevent')"
    @update:open="(value) => emit('update:open', value)"
  >
    <template #default="{ open }">
      <slot
        name="default"
        :open="open"
      />
    </template>

    <template #content="{ close }">
      <slot
        name="content"
        :close="close"
      />
    </template>

    <template #header="{ close }">
      <slot
        name="header"
        :close="close"
      />
    </template>

    <template #title>
      <slot name="title" />
    </template>

    <template #description>
      <slot name="description" />
    </template>

    <template #actions>
      <slot name="actions" />
    </template>

    <template #close="{ close, ui }">
      <slot
        name="close"
        :close="close"
        :ui="ui"
      />
    </template>

    <template #body="{ close }">
      <slot
        name="body"
        :close="close"
      />
    </template>

    <template #footer="{ close }">
      <slot
        name="footer"
        :close="close"
      />
    </template>
  </UModal>
</template>
