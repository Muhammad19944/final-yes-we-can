<script lang="ts">
import { useExtendProps } from '~/composables/useExtendProps'
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'
import type { ColorType, SizeType, OrientationType } from '~/types/libs'

/**
 * The Nuxt UI Button component supports color
 * prop values: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'.
 * Here, we extend the color prop by adding custom
 * values 'white' to support additional styling options.
 */
const customColors = ['white'] as const
type CustomColorsType = (typeof customColors)[number]

type UiColorsType = ColorType
type ExtendColorsType = ColorType | CustomColorsType

export interface TabItemEntity {
  label?: string
  icon?: string
  avatar?: AvatarEntity
  slot?: string
  content?: string
  value?: string | number
  disabled?: boolean
}

export interface BaseTabsEntity {
  as?: string
  color?: ExtendColorsType
  variant?: 'pill' | 'link'
  size?: Exclude<SizeType, '3xs' | '2xs' | '3xl' | '2xl'>
  orientation?: OrientationType
  content?: boolean
  labelKey?: string
  defaultValue?: string | number
  modelValue?: string | number
  activationMode?: 'automatic' | 'manual'
  unmountOnHide?: boolean
  rounded?: boolean
  border?: boolean
  ui?: {
    root?: string | string[]
    list?: string | string[]
    indicator?: string | string[]
    trigger?: string | string[]
    content?: string | string[]
    leadingIcon?: string | string[]
    leadingAvatar?: string | string[]
    leadingAvatarSize?: string | string[]
    label?: string | string[]
  }
}
</script>

<script setup lang="ts" generic="T extends TabItemEntity = TabItemEntity">
const props = withDefaults(defineProps<BaseTabsEntity & { items?: T[] }>(), {
  as: 'div',
  color: 'primary',
  variant: 'pill',
  size: 'lg',
  orientation: 'horizontal',
  content: true,
  labelKey: 'label',
  defaultValue: 0,
  activationMode: 'automatic',
  unmountOnHide: true,
  border: true
})

const slots = defineSlots<{
  leading(props: { item: T; index: number }): unknown
  default(props: { item: T; index: number }): unknown
  trailing(props: { item: T; index: number }): unknown
  content(props: { item: T; index: number }): unknown
  ['list-leading'](): unknown
  ['list-trailing'](): unknown
}>()

const { defineExtend: defineColor } = useExtendProps<CustomColorsType, ExtendColorsType, UiColorsType>(
  customColors,
  computed(() => props.color),
  'primary'
)

const defineExtendColor = computed(() => {
  switch (defineColor.value.extend) {
    case 'white':
      return {
        indicator: 'bg-white shadow-10',
        trigger: 'data-[state=active]:text-(--color-green-500)'
      }
    default:
      return {
        indicator: '',
        trigger: ''
      }
  }
})

const defineRounded = computed(() => {
  return {
    list: 'rounded-[10px]',
    indicator: 'rounded-lg'
  }
})

const model = useModel(props, 'modelValue')
</script>

<template>
  <UTabs
    v-model="model"
    :as="as"
    :items="items"
    :color="defineColor.ui"
    :variant="variant"
    :size="size"
    :orientation="orientation"
    :content="content"
    :label-key="labelKey"
    :default-value="defaultValue"
    :activation-mode="activationMode"
    :unmount-on-hide="unmountOnHide"
    :ui="{
      root: [ui?.root],
      list: [defineRounded.list, border ? '' : 'ring-0', ui?.list],
      indicator: [defineRounded.indicator, defineExtendColor.indicator, ui?.indicator],
      trigger: [defineExtendColor.trigger, 'cursor-pointer', ui?.trigger],
      content: [ui?.content],
      leadingIcon: [ui?.leadingIcon],
      leadingAvatar: [ui?.leadingAvatar],
      leadingAvatarSize: [ui?.leadingAvatarSize],
      label: [ui?.label]
    }"
  >
    <template
      v-if="slots.leading"
      #leading="{ item, index }"
    >
      <slot
        name="leading"
        :item="item"
        :index="index"
      />
    </template>

    <template #default="{ item, index }">
      <slot
        name="default"
        :item="item"
        :index="index"
      />
    </template>

    <template #trailing="{ item, index }">
      <slot
        name="trailing"
        :item="item"
        :index="index"
      />
    </template>

    <template #content="{ item, index }">
      <slot
        name="content"
        :item="item"
        :index="index"
      />
    </template>

    <template #list-leading>
      <slot name="list-leading" />
    </template>

    <template #list-trailing>
      <slot name="list-trailing" />
    </template>
  </UTabs>
</template>
