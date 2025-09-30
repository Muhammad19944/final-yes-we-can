<script lang="ts">
import type { SizeType, NestedItem, ArrayOrNested } from '~/types/libs'
import type { TooltipContentEntity } from '~/components/Base/Tooltip/BaseTooltip.vue'
import type { DropdownMenuItem } from '@nuxt/ui'

export interface BaseDropdownEntity<T extends ArrayOrNested<DropdownMenuItem> = ArrayOrNested<DropdownMenuItem>> {
  size?: Exclude<SizeType, '3xs' | '2xs' | '2xl' | '3xl'>
  items?: T
  checkedIcon?: string
  loadingIcon?: string
  externalIcon?: string | boolean
  content?: TooltipContentEntity
  arrow?: boolean
  portal?: boolean
  labelKey?: keyof NestedItem<T>
  disabled?: boolean
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
  ui?: {
    content?: string | string[]
    viewport?: string | string[]
    arrow?: string | string[]
    group?: string | string[]
    label?: string | string[]
    separator?: string | string[]
    item?: string | string[]
    itemLeadingIcon?: string | string[]
    itemLeadingAvatar?: string | string[]
    itemLeadingAvatarSize?: string | string[]
    itemTrailing?: string | string[]
    itemTrailingIcon?: string | string[]
    itemTrailingKbds?: string | string[]
    itemTrailingKbdsSize?: string | string[]
    itemLabel?: string | string[]
    itemLabelExternalIcon?: string | string[]
  }
}
</script>

<script setup lang="ts" generic="T extends ArrayOrNested<DropdownMenuItem>">
withDefaults(defineProps<BaseDropdownEntity<T>>(), {
  size: 'md',
  externalIcon: true,
  content: () => ({
    side: 'bottom',
    sideOffset: 8,
    collisionPadding: 8
  }),
  portal: true,
  labelKey: 'label',
  modal: true
})

defineSlots<{
  default(props: { open: boolean }): unknown
  item(props: { item: T; active?: boolean | undefined; index: number }): unknown
  'item-leading'(props: { item: T; active?: boolean | undefined; index: number }): unknown
  'item-label'(props: { item: T; active?: boolean | undefined; index: number }): unknown
  'item-trailing'(props: { item: T; active?: boolean | undefined; index: number }): unknown
  'content-top'(props: object): unknown
  'content-bottom'(props: object): unknown
}>()

const emit = defineEmits<{
  (e: 'update:open', payload: boolean): void
}>()
</script>

<template>
  <UDropdownMenu
    :size="size"
    :items="items"
    :checked-icon="checkedIcon"
    :loading-icon="loadingIcon"
    :external-icon="externalIcon"
    :content="content"
    :arrow="arrow"
    :portal="portal"
    :disabled="disabled"
    :default-open="defaultOpen"
    :open="open"
    :modal="modal"
    :ui="{
      content: [ui?.content],
      viewport: [ui?.viewport],
      arrow: [ui?.arrow],
      group: [ui?.group],
      label: [ui?.label],
      separator: [ui?.separator],
      item: [ui?.item],
      itemLeadingIcon: [ui?.itemLeadingIcon],
      itemLeadingAvatar: [ui?.itemLeadingAvatar],
      itemLeadingAvatarSize: [ui?.itemLeadingAvatarSize],
      itemTrailing: [ui?.itemTrailing],
      itemTrailingIcon: [ui?.itemTrailingIcon],
      itemTrailingKbds: [ui?.itemTrailingKbds],
      itemTrailingKbdsSize: [ui?.itemTrailingKbdsSize],
      itemLabel: [ui?.itemLabel],
      itemLabelExternalIcon: [ui?.itemLabelExternalIcon]
    }"
    @update:open="(value) => emit('update:open', value)"
  >
    <template #default="{ open }">
      <slot
        name="default"
        :open="open"
      />
    </template>

    <template #item="{ item, active, index }">
      <slot
        name="item"
        :item="item"
        :active="active"
        :index="index"
      />
    </template>

    <template #item-leading="{ item, active, index }">
      <slot
        name="item"
        :item="item"
        :active="active"
        :index="index"
      />
    </template>

    <template #item-label="{ item, active, index }">
      <slot
        name="item"
        :item="item"
        :active="active"
        :index="index"
      />
    </template>

    <template #item-trailing="{ item, active, index }">
      <slot
        name="item"
        :item="item"
        :active="active"
        :index="index"
      />
    </template>

    <template #content-top>
      <slot name="content-top" />
    </template>

    <template #content-bottom>
      <slot name="content-bottom" />
    </template>
  </UDropdownMenu>
</template>
