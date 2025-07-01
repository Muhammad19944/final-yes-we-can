<script lang="ts">
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'
import type { ColorType, SizeType, OrientationType } from '~/types/libs'

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
  color?: ColorType
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
  unmountOnHide: true
})

const slots = defineSlots<{
  leading(props: { item: T; index: number }): unknown
  default(props: { item: T; index: number }): unknown
  trailing(props: { item: T; index: number }): unknown
  content(props: { item: T; index: number }): unknown
  ['list-leading'](): unknown
  ['list-trailing'](): unknown
}>()

const defineRounded = computed(() => {
  return [props.rounded ? 'rounded-[80px]' : '']
})

const model = useModel(props, 'modelValue')
</script>

<template>
  <UTabs
    v-model="model"
    :as="as"
    :items="items"
    :color="color"
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
      list: [defineRounded, ui?.list],
      indicator: [defineRounded, ui?.indicator],
      trigger: [ui?.trigger],
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
