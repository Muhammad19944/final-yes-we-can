<script lang="ts">
import { useExtendProps } from '~/composables/useExtendProps'
import type { SizeType } from '~/types/libs'
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

export interface BaseFormFieldEntity {
  as?: string
  name?: string
  errorPattern?: RegExp
  label?: string
  description?: string
  help?: string
  error?: string | boolean
  hint?: string
  size?: ExtendSizesType
  required?: boolean
  eagerValidation?: boolean
  validateOnInputDelay?: number
  rounded?: boolean | ExtendSizesType
  ui?: {
    root?: string | string[]
    wrapper?: string | string[]
    labelWrapper?: string | string[]
    label?: string | string[]
    container?: string | string[]
    description?: string | string[]
    error?: string | string[]
    hint?: string | string[]
    help?: string | string[]
  }
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  labelSlot?: object
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  hintSlot?: object
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  descriptionSlot?: object
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  helpSlot?: object
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  errorSlot?: object
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseFormFieldEntity>(), {
  as: 'div',
  size: 'md',
  validateOnInputDelay: 300
})

const { defineExtend: defineSize } = useExtendProps<CustomSizesType, ExtendSizesType, UiSizesType>(
  customSizes,
  computed(() => props.size),
  'md'
)

const defineExtendLabel = computed(() => {
  switch (defineSize.value.extend) {
    case '2xl':
      return 'text-base'
    case '3xl':
      return 'text-xl'
    default:
      return 'text-[15px]'
  }
})
</script>

<template>
  <UFormField
    :as="as"
    :name="name"
    :error-pattern="errorPattern"
    :label="label"
    :description="description"
    :help="help"
    :error="error"
    :hint="hint"
    :size="defineSize.ui"
    :required="required"
    :eager-validation="eagerValidation"
    :validate-on-input-delay="validateOnInputDelay"
    :ui="{
      root: [defineExtendLabel, ui?.root],
      wrapper: [ui?.wrapper],
      labelWrapper: [ui?.labelWrapper],
      label: [ui?.label],
      container: [ui?.container],
      description: [ui?.description],
      error: [ui?.error],
      hint: [ui?.hint],
      help: [ui?.help]
    }"
  >
    <template #label>
      <slot name="label" />
    </template>

    <template #hint>
      <slot name="hint" />
    </template>

    <template #description>
      <slot name="description" />
    </template>

    <template #help>
      <slot name="help" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #default>
      <slot name="default" />
    </template>
  </UFormField>
</template>
