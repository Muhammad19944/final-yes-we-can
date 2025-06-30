<script lang="ts">
import { useRounded } from '~/composables/useRounded'
import type { AcceptableValue, ArrayOrNested, ColorType, GetItemKeys, GetModelValue, SizeType, VariantType } from '~/types/libs'
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'

/**
 * The Nuxt UI Input component supports size
 * prop values: 'xs', 'sm', 'md', 'lg', and 'xl'.
 * Here, we extend the size prop by adding custom
 * values '2xl' and '3xl' to support additional styling options.
 */
const customSizes = ['2xl', '3xl'] as const
type CustomSizesType = (typeof customSizes)[number]

type UiSizesType = Exclude<SizeType, '3xs' | '2xs' | CustomSizesType>
type ExtendSizesType = UiSizesType | CustomSizesType

interface _SelectMenuItem {
  label?: string
  icon?: string
  avatar?: AvatarEntity
  type?: 'label' | 'separator' | 'item'
  disabled?: boolean
  onSelect?(e?: Event): void
  ui?: {
    label?: string | string[]
    separator?: string | string[]
    item?: string | string[]
    itemLeadingIcon?: string | string[]
    itemLeadingAvatarSize?: string | string[]
    itemLeadingAvatar?: string | string[]
    itemLeadingChipSize?: string | string[]
    itemLeadingChip?: string | string[]
    itemLabel?: string | string[]
    itemTrailing?: string | string[]
    itemTrailingIcon?: string | string[]
  }
}

export type SelectMenuItem = _SelectMenuItem | AcceptableValue | boolean

export interface BaseFormSelectEntity<T extends ArrayOrNested<SelectMenuItem> = ArrayOrNested<SelectMenuItem>, VK extends GetItemKeys<T> | undefined = undefined, M extends boolean = false> {
  id?: string
  placeholder?: string
  color?: ColorType
  variant?: Exclude<VariantType, 'link' | 'solid'> | 'none'
  size?: ExtendSizesType
  required?: boolean
  items?: T
  defaultValue?: GetModelValue<T, VK, M>
  modelValue?: GetModelValue<T, VK, M>
  multiple?: M & boolean
  rounded?: boolean | ExtendSizesType
  ui?: {
    base?: string | string[]
    value?: string | string[]
    placeholder?: string | string[]
    arrow?: string | string[]
    content?: string | string[]
    viewport?: string | string[]
    group?: string | string[]
    empty?: string | string[]
    label?: string | string[]
    separator?: string | string[]
    item?: string | string[]
    itemLeadingIcon?: string | string[]
    itemLeadingAvatar?: string | string[]
    itemLeadingAvatarSize?: string | string[]
    itemLeadingChip?: string | string[]
    itemLeadingChipSize?: string | string[]
    itemTrailing?: string | string[]
    itemTrailingIcon?: string | string[]
    itemLabel?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseFormSelectEntity>(), {
  placeholder: 'Manzilni tanlang',
  color: 'primary',
  variant: 'subtle',
  rounded: 'xl' as const
})

const { defineExtend: defineSize } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(
  customSizes,
  computed(() => props.size),
  'md'
)

const defineExtendSize = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl':
      return 'px-3.5 py-2.5 text-base'
    case '3xl':
      return 'p-4 text-base placeholder:text-lg'
    default:
      return ''
  }
})

const { defineRounded } = useRounded(computed(() => props.rounded))

const model = useModel(props, 'modelValue')
</script>

<template>
  <USelectMenu
    :id="id"
    v-model="model"
    :placeholder="placeholder"
    :color="color"
    :variant="variant"
    :size="defineSize.ui"
    :required="required"
    :items="items"
    :default-value="defaultValue"
    :multiple="multiple"
    :ui="{
      base: [defineExtendSize, defineRounded, ui?.base],
      value: [ui?.value],
      placeholder: [ui?.placeholder],
      arrow: [ui?.arrow],
      content: [ui?.content],
      viewport: [ui?.viewport],
      group: [ui?.group],
      empty: [ui?.empty],
      label: [ui?.label],
      separator: [ui?.separator],
      item: [ui?.item],
      itemLeadingIcon: [ui?.itemLeadingIcon],
      itemLeadingAvatar: [ui?.itemLeadingAvatar],
      itemLeadingAvatarSize: [ui?.itemLeadingAvatarSize],
      itemLeadingChip: [ui?.itemLeadingChip],
      itemLeadingChipSize: [ui?.itemLeadingChipSize],
      itemTrailing: [ui?.itemTrailing],
      itemTrailingIcon: [ui?.itemTrailingIcon],
      itemLabel: [ui?.itemLabel]
    }"
  />
</template>
