<script lang="ts">
import type { ColorType, VariantType, SizeType } from '~/types/libs'

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

export interface BasePinInputEntity {
  as?: string
  color?: ColorType
  variant?: Exclude<VariantType, 'link' | 'solid'> | 'none'
  size?: ExtendSizesType
  length?: string | number
  autofocus?: boolean
  autofocusDelay?: number
  highlight?: boolean
  defaultValue?: string[][]
  disabled?: boolean
  id?: string
  mask?: boolean
  modelValue?: string[]
  name?: string
  otp?: boolean
  required?: boolean
  type?: 'number' | 'text'
  ui?: {
    root?: string | string[]
    base?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BasePinInputEntity>(), {
  as: 'div',
  color: 'primary',
  variant: 'subtle',
  length: 5,
  autofocusDelay: 0,
  type: 'text'
})

const { defineExtend: defineSize } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(
  customSizes,
  computed(() => props.size),
  'md'
)

const defineExtendSize = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl':
      return 'size-11 text-base'
    case '3xl':
      return 'p-4 text-base placeholder:text-lg'
    default:
      return ''
  }
})
</script>

<template>
  <UPinInput
    :id="id"
    :as="as"
    :color="color"
    :variant="variant"
    :size="defineSize.ui"
    :length="length"
    :autofocus="autofocus"
    :autofocus-delay="autofocusDelay"
    :highlight="highlight"
    :default-value="defaultValue"
    :disabled="disabled"
    :mask="mask"
    :model-value="modelValue"
    :name="name"
    :otp="otp"
    :required="required"
    :type="type"
    placeholder="○"
    :ui="{
      root: [ui?.root],
      base: ['placeholder:text-sm', defineExtendSize, ui?.base]
    }"
  />
</template>
