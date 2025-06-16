<script lang="ts">
import type { ColorType, VariantType, SizeType } from '~/types/utils'
import type { AvatarEntity } from '../Avatar/BaseAvatar.vue'

type CustomColorsType = 'greyscale'

export interface ButtonEntity {
  as?: string
  label?: string
  color?: ColorType | CustomColorsType
  activeColor?: ColorType | CustomColorsType
  variant?: VariantType
  activeVariant?: VariantType
  size?: Exclude<SizeType, '3xs' | '2xs'>
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
  background?: 'white' | 'gradient'
  rounded?: boolean | Exclude<SizeType, '3xs' | '2xs'>
}
type LibSizeType = Exclude<SizeType, '3xs' | '2xs' | '2xl' | '3xl'>
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ButtonEntity>(), {
  as: 'button',
  color: 'primary',
  variant: 'solid',
  size: 'md',
  type: 'button'
})

const customColors: CustomColorsType[] = ['greyscale']

const customColorsClass: Record<CustomColorsType, string> = {
  greyscale: 'bg-[var(--color-greyscale-100)] text-[var(--color-greyscale-900)] hover:bg-[var(--color-greyscale-200)]'
}

const isCustomColors = (color: ColorType | CustomColorsType): color is CustomColorsType => {
  return customColors.includes(color as CustomColorsType)
}

const defineColors = computed(() => {
  if (isCustomColors(props.color)) {
    return {
      lib: 'primary' as ColorType,
      custom: customColorsClass[props.color]
    }
  }

  return {
    lib: props.color,
    custom: null
  }
})

const DEFAULT_LIB_SIZE: LibSizeType = 'md'

const buttonSizeClass: Record<'2xl' | '3xl', string> = {
  '2xl': 'px-3.5 py-2.5 text-base gap-2',
  '3xl': 'p-4 text-base gap-2'
}

const isLibrarySize = (size: string): size is LibSizeType => {
  return ['xs', 'sm', 'md', 'lg', 'xl'].includes(size)
}

const defineButtonSize = computed(() => {
  if (isLibrarySize(props.size)) {
    return {
      lib: props.size,
      custom: ''
    }
  }

  return {
    lib: DEFAULT_LIB_SIZE,
    custom: buttonSizeClass[props.size as '2xl' | '3xl'] ?? ''
  }
})

const defineIconSize = computed(() => {
  const map: Record<string, string | null> = {
    '2xl': 'size-5',
    '3xl': 'size-7'
  }

  return map[props.size as string] ?? null
})

const defineSquare = computed(() => {
  if (props.square) {
    const map: Record<string, string | null> = {
      '2xl': 'p-3',
      '3xl': 'p-3.5'
    }

    return map[props.size as string] ?? null
  }

  return null
})

const roundedClass: Record<Exclude<SizeType, '3xs' | '2xs'>, string> = {
  xs: 'rounded',
  sm: 'rounded',
  md: 'rounded-lg',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-xl',
  '3xl': 'rounded-xl'
}

const defineRounded = computed(() => {
  if (!props.rounded) {
    return ''
  } else if (typeof props.rounded === 'boolean') {
    return 'rounded-[80px]'
  } else {
    return roundedClass[props.rounded]
  }
})

const defineBaseClass = computed(() => {
  return [
    defineRounded.value,
    props.background === 'white' ? 'bg-white text-greyscale-900 hover:text-white' : null,
    props.background === 'gradient' ? 'bg-linear-[var(--primary-linear)] text-white' : null
  ]
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
    :size="defineButtonSize.lib"
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
      base: [defineBaseClass, defineColors.custom, defineButtonSize.custom, defineSquare],
      leadingIcon: [defineIconSize]
    }"
  >
    <template #default>
      <slot name="default" />
    </template>
  </UButton>
</template>
