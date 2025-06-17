<script lang="ts">
import type { ColorType, VariantType, SizeType } from '~/types/utils'
import type { AvatarEntity } from '../Avatar/BaseAvatar.vue'

const customColors = ['greyscale', 'white', 'gradient'] as const
type CustomColorsType = (typeof customColors)[number]
type OwnColorsType = ColorType | CustomColorsType

const customSizes = ['2xl', '3xl'] as const
type CustomSizesType = (typeof customSizes)[number]

type LibSizesType = Exclude<SizeType, '3xs' | '2xs' | CustomSizesType>
type OwnSizesType = LibSizesType | CustomSizesType

export interface ButtonEntity {
  as?: string
  label?: string
  color?: ColorType | CustomColorsType
  activeColor?: ColorType | CustomColorsType
  variant?: VariantType
  activeVariant?: VariantType
  size?: OwnSizesType
  square?: boolean
  block?: boolean
  loadingAuto?: boolean
  icon?: string
  avatar?: AvatarEntity
  leading?: boolean
  leadingIcon?: string
  trailing?: boolean
  trailingIcon?: string
  loading?: boolean
  loadingIcon?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  active?: boolean
  target?: null | '_blank' | '_parent' | '_self' | '_top' | (string & {})
  rounded?: boolean | OwnSizesType
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ButtonEntity>(), {
  as: 'button',
  color: 'primary',
  variant: 'solid',
  size: 'md',
  type: 'button'
})

const customColorsClass: Record<CustomColorsType, string> = {
  greyscale: 'bg-[var(--color-greyscale-100)] text-[var(--color-greyscale-900)] hover:bg-[var(--color-greyscale-200)]',
  white: 'bg-white text-greyscale-900 hover:text-white',
  gradient: 'bg-linear-[var(--primary-linear)] text-white'
}

const customSizesClass: Record<CustomSizesType, string> = {
  '2xl': 'px-3.5 py-2.5 text-base gap-2',
  '3xl': 'p-4 text-base gap-2'
}

const sizeIconMap: Record<CustomSizesType, string> = {
  '2xl': 'size-5',
  '3xl': 'size-7'
}

const squareSizeMap: Record<CustomSizesType, string> = {
  '2xl': 'p-3',
  '3xl': 'p-3.5'
}

const roundedClassMap: Record<OwnSizesType, string> = {
  xs: 'rounded',
  sm: 'rounded',
  md: 'rounded-lg',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-xl',
  '3xl': 'rounded-xl'
}

const isCustomColor = (color: OwnColorsType): color is CustomColorsType => customColors.includes(color as CustomColorsType)

const isCustomSize = (size: OwnSizesType): size is CustomSizesType => customSizes.includes(size as CustomSizesType)

const defineColors = computed(() => ({
  lib: isCustomColor(props.color) ? 'primary' : props.color,
  custom: isCustomColor(props.color) ? customColorsClass[props.color] : null
}))

const defineSizes = computed(() => ({
  lib: isCustomSize(props.size) ? 'md' : props.size,
  custom: isCustomSize(props.size) ? customSizesClass[props.size] : null
}))

const defineIconSize = computed(() => (isCustomSize(props.size) ? sizeIconMap[props.size] : null))

const defineSquare = computed(() => (props.square && isCustomSize(props.size) ? squareSizeMap[props.size] : null))

const defineRounded = computed(() => {
  if (!props.rounded) return ''
  if (typeof props.rounded === 'boolean') return 'rounded-[80px]'
  return roundedClassMap[props.rounded]
})
</script>

<template>
  <UButton
    :as="as"
    :label="label"
    :color="defineColors.lib"
    :active-color="defineColors.lib"
    :variant="variant"
    :active-variant="activeVariant"
    :size="defineSizes.lib"
    :square="square"
    :block="block"
    :loading-auto="loadingAuto"
    :icon="icon"
    :avatar="avatar"
    :leading="leading"
    :leading-icon="leadingIcon"
    :trailing="trailing"
    :trailing-icon="trailingIcon"
    :loading="loading"
    :loading-icon="loadingIcon"
    :type="type"
    :disabled="disabled"
    :active="active"
    :target="target"
    :ui="{
      base: [defineColors.custom, defineSizes.custom, defineRounded, defineSquare],
      leadingIcon: [defineIconSize]
    }"
  >
    <template #default>
      <slot name="default" />
    </template>
  </UButton>
</template>
