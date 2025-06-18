<script lang="ts">
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'
import type { ColorType, VariantType, SizeType } from '~/types/utils'

const customSizes = ['2xl', '3xl'] as const
type CustomSizesType = (typeof customSizes)[number]

type LibSizesType = Exclude<SizeType, '3xs' | '2xs' | CustomSizesType>
type OwnSizesType = LibSizesType | CustomSizesType

export interface FormInputEntity {
  as?: string
  id?: string
  name?: string
  type?:
    | 'number'
    | 'reset'
    | 'submit'
    | 'color'
    | 'button'
    | 'checkbox'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    // | 'password'
    | 'radio'
    | 'range'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | (string & {})
  placeholder?: string
  color?: ColorType
  variant?: Exclude<VariantType, 'link' | 'solid'> | 'none'
  size?: OwnSizesType
  required?: boolean
  autocomplete?: string
  autofocus?: boolean
  autofocusDelay?: number
  disabled?: boolean
  highlight?: boolean
  icon?: string
  avatar?: AvatarEntity
  leading?: boolean
  leadingIcon?: string
  trailing?: boolean
  trailingIcon?: string
  loading?: boolean
  loadingIcon?: string
  modelValue?: null | string | number
  rounded?: boolean | OwnSizesType
  ui?: {
    root?: string | string[]
    base?: string | string[]
    leading?: string | string[]
    leadingIcon?: string | string[]
    leadingAvatar?: string | string[]
    leadingAvatarSize?: string | string[]
    trailing?: string | string[]
    trailingIcon?: string | string[]
  }
}
</script>

<script setup lang="ts">
const slots = useSlots()

const props = withDefaults(defineProps<FormInputEntity>(), {
  as: 'div',
  type: 'text',
  color: 'primary',
  variant: 'subtle',
  size: 'xl',
  autocomplete: 'off',
  autofocusDelay: 0,
  rounded: 'xl' as const
})

const customSizesClass: Record<CustomSizesType, string> = {
  '2xl': 'px-3.5 py-2.5 text-base',
  '3xl': 'p-4 text-base placeholder:text-lg'
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

const sizeIconMap: Record<CustomSizesType, string> = {
  '2xl': 'size-6',
  '3xl': 'size-7'
}

const leadingMap: Record<CustomSizesType, string> = {
  '2xl': 'ps-3',
  '3xl': 'ps-4'
}

const trailingMap: Record<CustomSizesType, string> = {
  '2xl': 'pe-3',
  '3xl': 'pe-4'
}

const leadingPaddingMap: Record<CustomSizesType, string> = {
  '2xl': 'ps-11',
  '3xl': 'ps-13'
}

const trailingPaddingMap: Record<CustomSizesType, string> = {
  '2xl': 'pe-11',
  '3xl': 'pe-13'
}

const isCustomSize = (size: OwnSizesType): size is CustomSizesType => customSizes.includes(size as CustomSizesType)

const defineSizes = computed(() => ({
  lib: isCustomSize(props.size) ? 'md' : props.size,
  custom: isCustomSize(props.size) ? customSizesClass[props.size] : null
}))

const defineRounded = computed(() => {
  if (!props.rounded) return ''
  if (typeof props.rounded === 'boolean') return 'rounded-[80px]'
  return roundedClassMap[props.rounded]
})

const defineIconSize = computed(() => (isCustomSize(props.size) ? sizeIconMap[props.size] : null))

const defineLeading = computed(() => (isCustomSize(props.size) ? leadingMap[props.size] : null))

const defineTrailing = computed(() => (isCustomSize(props.size) ? trailingMap[props.size] : null))

const defineLeadingPadding = computed(() => {
  if ((props.icon && !props.trailing) || props.leading || props.leadingIcon) {
    return isCustomSize(props.size) ? leadingPaddingMap[props.size] : null
  }

  return null
})

const defineTrailingPadding = computed(() => {
  if ((props.icon && !props.leading) || props.trailing || props.trailingIcon) {
    return isCustomSize(props.size) ? trailingPaddingMap[props.size] : null
  }

  return null
})

const model = useModel(props, 'modelValue')
</script>

<template>
  <UInput
    :id="id"
    v-model="model"
    :as="as"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :color="color"
    :variant="variant"
    :size="defineSizes.lib"
    :required="required"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    :autofocus-delay="autofocusDelay"
    :disabled="disabled"
    :highlight="highlight"
    :icon="icon"
    :avatar="avatar"
    :leading="leading"
    :leading-icon="leadingIcon"
    :trailing="trailing"
    :trailing-icon="trailingIcon"
    :loading="loading"
    :loading-icon="loadingIcon"
    :ui="{
      base: [defineSizes.custom, defineRounded, defineLeadingPadding, defineTrailingPadding, ui?.base],
      leading: [defineLeading, ui?.leading],
      trailing: [defineTrailing, ui?.trailing],
      leadingIcon: [defineIconSize, ui?.leadingIcon],
      trailingIcon: [defineIconSize, ui?.trailingIcon]
    }"
  >
    <template #default>
      <slot name="default" />
    </template>

    <template
      v-if="leading || slots.leading"
      #leading
    >
      <slot name="leading" />
    </template>

    <template
      v-if="trailing || slots.trailing"
      #trailing
    >
      <slot name="trailing" />
    </template>
  </UInput>
</template>
