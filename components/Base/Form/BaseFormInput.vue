<script lang="ts">
import { useExtendProps } from '~/composables/useExtendProps'
import { useRounded } from '~/composables/useRounded'
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'
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
  size?: ExtendSizesType
  required?: boolean
  autocomplete?: string
  autofocus?: boolean
  autofocusDelay?: number
  disabled?: boolean
  readonly?: boolean
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
  rounded?: boolean | ExtendSizesType
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
  autocomplete: 'off',
  autofocusDelay: 0,
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

const defineExtendLeading = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl':
      return 'ps-3'
    case '3xl':
      return 'ps-4'
    default:
      return ''
  }
})

const defineExtendTrailing = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl':
      return 'pe-2'
    case '3xl':
      return 'pe-4'
    default:
      return ''
  }
})

const defineExtendLeadingPadding = computed(() => {
  if ((props.icon && !props.trailing) || props.leading || props.leadingIcon) {
    switch (defineSize.value.extend) {
      case '2xl':
        return 'ps-11'
      case '3xl':
        return 'ps-13'
      default:
        return ''
    }
  }

  return null
})

const defineExtendTrailingPadding = computed(() => {
  if ((props.icon && !props.leading) || props.trailing || props.trailingIcon) {
    switch (defineSize.value.extend) {
      case '2xl':
        return 'pe-11'
      case '3xl':
        return 'pe-13'
      default:
        return ''
    }
  }

  return null
})

const { defineRounded } = useRounded(computed(() => props.rounded))

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
    :size="defineSize.ui"
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
      root: [ui?.root],
      base: [defineExtendSize, defineRounded, defineExtendLeadingPadding, defineExtendTrailingPadding, props.readonly ? 'pointer-events-none' : '', ui?.base],
      leading: [defineExtendLeading, ui?.leading],
      trailing: [defineExtendTrailing, ui?.trailing],
      leadingIcon: [defineExtendIconSize, ui?.leadingIcon],
      trailingIcon: [defineExtendIconSize, ui?.trailingIcon]
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
