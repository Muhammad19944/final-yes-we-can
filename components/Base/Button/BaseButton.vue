<script lang="ts">
import { useExtendProps } from '~/composables/useExtendProps'
import { useRounded } from '~/composables/useRounded'
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'
import type { ColorType, VariantType, SizeType } from '~/types/utils'
import type { AvatarEntity } from '../Avatar/BaseAvatar.vue'

/**
 * The Nuxt UI Button component supports color
 * prop values: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'.
 * Here, we extend the color prop by adding custom
 * values 'greyscale', 'white' and 'gradient' to support additional styling options.
 */
const customColors = ['greyscale', 'white', 'gradient'] as const
type CustomColorsType = (typeof customColors)[number]

type UiColorsType = ColorType
type ExtendColorsType = ColorType | CustomColorsType

/**
 * The Nuxt UI Button component supports size
 * prop values: 'xs', 'sm', 'md', 'lg', and 'xl'.
 * Here, we extend the size prop by adding custom
 * values '2xl' and '3xl' to support additional styling options.
 */
const customSizes = ['2xl', '3xl'] as const
type CustomSizesType = (typeof customSizes)[number]

type UiSizesType = Exclude<SizeType, '3xs' | '2xs' | CustomSizesType>
type ExtendSizesType = UiSizesType | CustomSizesType

export interface ButtonEntity {
  as?: string
  label?: string
  color?: ExtendColorsType
  activeColor?: ExtendColorsType
  variant?: VariantType
  activeVariant?: VariantType
  size?: ExtendSizesType
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
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
  target?: null | '_blank' | '_parent' | '_self' | '_top' | (string & {})
  rounded?: boolean | ExtendSizesType
  raised?: boolean
  underline?: boolean
  ui?: {
    base?: string | string[]
    label?: string | string[]
    leadingIcon?: string | string[]
    leadingAvatar?: string | string[]
    leadingAvatarSize?: string | string[]
    trailingIcon?: string | string[]
  }
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

const { defineExtend: defineColor } = useExtendProps<CustomColorsType, ExtendColorsType, UiColorsType>(
  customColors,
  computed(() => props.color),
  'primary'
)

const defineExtendColor = computed(() => {
  switch (defineColor.value.extend) {
    case 'greyscale':
      return 'bg-[var(--color-greyscale-100)] text-[var(--color-greyscale-900)] hover:bg-[var(--color-greyscale-200)]'
    case 'white':
      return 'bg-white text-greyscale-900 hover:text-white'
    case 'gradient':
      return 'bg-linear-[var(--primary-linear)] text-white'
    default:
      return ''
  }
})

const { defineExtend: defineSize } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(
  customSizes,
  computed(() => props.size),
  'md'
)

const defineExtendSize = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl':
      return 'px-3.5 py-2.5 text-base gap-2'
    case '3xl':
      return 'p-4 text-base gap-2'
    default:
      return ''
  }
})

const defineExtendIconSize = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl':
      return 'size-6'
    case '3xl':
      return 'size-7'
    default:
      return ''
  }
})

const defineExtendSquare = computed(() => {
  if (!props.square) return ''

  switch (defineSize.value.extend) {
    case '2xl':
      return 'p-2.5'
    case '3xl':
      return 'p-3.5'
    default:
      return ''
  }
})

const { defineRounded } = useRounded(computed(() => props.rounded))

const defineBase = computed(() => {
  return [props.raised ? 'shadow-xs' : null, props.underline ? 'underline underline-offset-4' : null]
})
</script>

<template>
  <UButton
    :as="as"
    :label="label"
    :color="defineColor.ui"
    :active-color="defineColor.ui"
    :variant="variant"
    :active-variant="activeVariant"
    :size="defineSize.ui"
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
    :to="to"
    :target="target"
    :ui="{
      base: [defineBase, defineExtendColor, defineExtendSize, defineExtendSquare, defineRounded, ui?.base],
      label: [ui?.label],
      leadingAvatar: [ui?.leadingAvatar],
      leadingAvatarSize: [ui?.leadingAvatarSize],
      leadingIcon: [defineExtendIconSize, ui?.leadingIcon],
      trailingIcon: [defineExtendIconSize, ui?.trailingIcon]
    }"
  >
    <template #default>
      <slot name="default" />
    </template>
  </UButton>
</template>
