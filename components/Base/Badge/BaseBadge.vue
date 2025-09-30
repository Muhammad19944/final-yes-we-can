<script lang="ts">
import { useExtendProps } from '~/composables/useExtendProps'
import type { ColorType, SizeType, VariantType } from '~/types/libs'
import type { AvatarEntity } from '../Avatar/BaseAvatar.vue'

/**
 * The Nuxt UI Button component supports color
 * prop values: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'.
 * Here, we extend the color prop by adding custom
 * values 'greyscale' and 'white' to support additional styling options.
 */
const customColors = ['greyscale', 'white'] as const
type CustomColorsType = (typeof customColors)[number]

type UiColorsType = ColorType
export type ExtendColorsType = ColorType | CustomColorsType

/**
 * The Nuxt UI Button component supports size
 * prop values: 'xs', 'sm', 'md', 'lg', and 'xl'.
 * Here, we extend the size prop by adding custom
 * values '2xl' to support additional styling options.
 */
const customSizes = ['2xl'] as const
type CustomSizesType = (typeof customSizes)[number]

type UiSizesType = Exclude<SizeType, '3xs' | '2xs' | '3xl' | CustomSizesType>
type ExtendSizesType = UiSizesType | CustomSizesType

export interface BaseBadgeEntity {
  as?: string
  label?: string | number
  color?: ExtendColorsType
  variant?: Exclude<VariantType, 'link' | 'ghost'>
  size?: ExtendSizesType
  square?: boolean
  icon?: string
  avatar?: AvatarEntity
  leading?: boolean
  leadingIcon?: string
  trailing?: boolean
  trailingIcon?: string
  shadow?: boolean
  closable?: boolean
  rounded?: boolean
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
const props = withDefaults(defineProps<BaseBadgeEntity>(), {
  as: 'span',
  color: 'primary',
  variant: 'solid',
  rounded: true
})

const emit = defineEmits<{
  (e: 'emit:close', payload: string | number | undefined): void
}>()

const { defineExtend: defineColor } = useExtendProps<CustomColorsType, ExtendColorsType, UiColorsType>(
  customColors,
  computed(() => props.color),
  'primary'
)

const defineExtendColor = computed(() => {
  switch (defineColor.value.extend) {
    case 'greyscale':
      return 'bg-(--color-greyscale-100) text-(--color-greyscale-500) hover:bg-(--color-greyscale-200)'
    case 'white':
      return 'bg-white text-(--color-greyscale-700)'
    default:
      return ''
  }
})

const defineCloseColor = computed(() => {
  switch (props.color) {
    case 'greyscale':
    case 'white':
      return {
        base: 'bg-(--color-greyscale-600)/15 hover:bg-(--color-greyscale-600)/25',
        leadingIcon: 'text-(--color-greyscale-600)'
      }
    default:
      return {
        base: 'bg-white hover:bg-(--color-greyscale-200)',
        leadingIcon: 'text-(--color-greyscale-600)'
      }
  }
})

const { defineExtend: defineSize } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(
  customSizes,
  computed(() => props.size),
  'md'
)

const defineExtendSize = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl': {
      const classNames = 'px-3 py-1 text-sm'

      if (props.closable) {
        return `${classNames} pr-1.5`
      }

      return classNames
    }
    default:
      return ''
  }
})

const defineBase = computed(() => {
  return ['gap-2', props.shadow ? 'shadow-10' : null, props.rounded ? 'rounded-[80px]' : null]
})
</script>

<template>
  <UBadge
    :as="as"
    :label="label"
    :color="defineColor.ui"
    :variant="variant"
    :size="defineSize.ui"
    :square="square"
    :icon="icon"
    :avatar="avatar"
    :leading="leading"
    :leading-icon="leadingIcon"
    :trailing="trailing"
    :trailing-icon="trailingIcon"
    :ui="{
      base: [defineBase, defineExtendColor, defineExtendSize, ui?.base],
      label: [ui?.label],
      leadingIcon: [ui?.leadingIcon],
      leadingAvatar: [ui?.leadingAvatar],
      leadingAvatarSize: [ui?.leadingAvatarSize],
      trailingIcon: [ui?.trailingIcon]
    }"
  >
    <template #default>
      <slot name="default" />
    </template>

    <template #leading>
      <slot name="leading" />
    </template>

    <template #trailing>
      <template v-if="closable">
        <BaseButton
          size="xs"
          square
          rounded
          icon="heroicons:x-mark-20-solid"
          :ui="{
            base: [defineCloseColor.base, 'cursor-pointer p-[2px]'],
            leadingIcon: [defineCloseColor.leadingIcon, 'text-(--color-greyscale-600)']
          }"
          @click="emit('emit:close', label)"
        />
      </template>

      <template v-else>
        <slot name="trailing" />
      </template>
    </template>
  </UBadge>
</template>
