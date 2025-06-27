<script lang="ts">
import type { SingleOrMultiple } from '~/types/utils'

export interface AccordionItemEntity {
  label?: string
  icon?: string
  trailingIcon?: string
  slot?: string
  content?: string
  value?: string
  disabled?: boolean
  ui?: {
    item?: string | string[]
    header?: string | string[]
    trigger?: string | string[]
    leadingIcon?: string | string[]
    label?: string | string[]
    trailingIcon?: string | string[]
    content?: string | string[]
    body?: string | string[]
  }
}

export interface BaseAccordionEntity {
  as?: string
  items?: AccordionItemEntity[]
  trailingIcon?: string
  labelKey?: string
  collapsible?: boolean
  defaultValue?: string | string[]
  modelValue?: string | string[]
  type?: SingleOrMultiple
  disabled?: boolean
  unmountOnHide?: boolean
  ui?: AccordionItemEntity['ui']
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseAccordionEntity>(), {
  as: 'div',
  labelKey: 'label',
  collapsible: true,
  type: 'single',
  unmountOnHide: true
})
const slots = defineSlots<{
  leading(props: { item: AccordionItemEntity; index: number; open: boolean }): unknown
  default(props: { item: AccordionItemEntity; index: number; open: boolean }): unknown
  trailing(props: { item: AccordionItemEntity; index: number; open: boolean }): unknown
  content(props: { item: AccordionItemEntity; index: number; open: boolean }): unknown
  body(props: { item: AccordionItemEntity; index: number; open: boolean }): unknown
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | string[] | undefined): void
}>()
const model = useModel(props, 'modelValue')
</script>

<template>
  <UAccordion
    v-model="model"
    :as="as"
    :items="items"
    :trailing-icon="trailingIcon"
    :label-key="labelKey"
    :collapsible="collapsible"
    :default-value="defaultValue"
    :type="type"
    :disabled="disabled"
    :unmount-on-hide="unmountOnHide"
    :ui="{
      item: ['border-b border-b-(--color-greyscale-200) first:border-t last:border-b py-1.5', ui?.item],
      header: [ui?.header],
      trigger: [ui?.trigger],
      leadingIcon: [ui?.leadingIcon],
      label: ['text-xl font-semibold text-(--color-greyscale-900)', ui?.label],
      trailingIcon: ['text-(--color-greyscale-500) group-data-[state=open]:text-(--color-greyscale-900)', ui?.trailingIcon],
      content: [ui?.content],
      body: [ui?.body]
    }"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template
      v-if="slots.leading"
      #leading="{ item, index, open }"
    >
      <slot
        name="leading"
        :item="item"
        :index="index"
        :open="open"
      />
    </template>

    <template #default="{ item, index, open }">
      <slot
        name="default"
        :item="item"
        :index="index"
        :open="open"
      />
    </template>

    <template
      v-if="slots.trailing"
      #trailing="{ item, index, open }"
    >
      <slot
        name="trailing"
        :item="item"
        :index="index"
        :open="open"
      />
    </template>

    <template
      v-if="slots.content"
      #content="{ item, index, open }"
    >
      <slot
        name="content"
        :item="item"
        :index="index"
        :open="open"
      />
    </template>

    <template
      v-if="slots.body"
      #body="{ item, index, open }"
    >
      <slot
        name="body"
        :item="item"
        :index="index"
        :open="open"
      />
    </template>
  </UAccordion>
</template>
