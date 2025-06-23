<script lang="ts">
import type { AcceptableValue, SizeType, ColorType, RadioVariantType, OrientationType, IndicatorType } from '~/types/utils'

// Base interface for each radio group item
export interface BaseFormRadioGroupItemEntity {
  label: string
  description?: string
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: Exclude<AcceptableValue, Record<string, any>>
  class?: unknown
  ui?: {
    root?: string | string[]
    fieldset?: string | string[]
    legend?: string | string[]
    item?: string | string[]
    container?: string | string[]
    base?: string | string[]
    indicator?: string | string[]
    wrapper?: string | string[]
    label?: string | string[]
    description?: string | string[]
  }
}

// Base interface for the radio group component
export interface BaseFormRadioGroupEntity {
  as?: string
  legend?: string
  valueKey?: string
  labelKey?: string
  descriptionKey?: string
  size?: Exclude<SizeType, '3xs' | '2xs' | '2xl' | '3xl'>
  variant?: RadioVariantType
  color?: ColorType
  orientation?: OrientationType
  indicator?: IndicatorType
  defaultValue?: AcceptableValue
  disabled?: boolean
  loop?: boolean
  modelValue?: AcceptableValue
  name?: string
  required?: boolean
  ui?: {
    root?: string | string[]
    fieldset?: string | string[]
    legend?: string | string[]
    item?: string | string[]
    container?: string | string[]
    base?: string | string[]
    indicator?: string | string[]
    wrapper?: string | string[]
    label?: string | string[]
    description?: string | string[]
  }
  legendSlot?: object
}
</script>

<script setup lang="ts" generic="T extends BaseFormRadioGroupItemEntity = BaseFormRadioGroupItemEntity">
const props = withDefaults(defineProps<BaseFormRadioGroupEntity & { items?: T[] }>(), {
  as: 'div',
  valueKey: 'value',
  labelKey: 'label',
  descriptionKey: 'description',
  size: 'md',
  variant: 'list',
  color: 'primary',
  orientation: 'vertical',
  indicator: 'start'
})

const emit = defineEmits<{
  (e: 'change', payload: Event): void
  (e: 'update:modelValue', payload: AcceptableValue): void
}>()

const model = useModel(props, 'modelValue')
</script>

<template>
  <URadioGroup
    v-model="model"
    :as="as"
    :legend="legend"
    :value-key="valueKey"
    :label-key="labelKey"
    :description-key="descriptionKey"
    :items="items"
    :size="size"
    :variant="variant"
    :color="color"
    :orientation="orientation"
    :indicator="indicator"
    :default-value="defaultValue"
    :disabled="disabled"
    :loop="loop"
    :name="name"
    :required="required"
    :ui="{
      root: [ui?.root],
      fieldset: [ui?.fieldset],
      legend: [ui?.legend],
      item: [ui?.item],
      container: [ui?.container],
      base: [ui?.base],
      indicator: [ui?.indicator],
      wrapper: [ui?.wrapper],
      label: [ui?.label],
      description: [ui?.description]
    }"
    @change="emit('change', $event)"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #legend>
      <slot name="legend" />
    </template>

    <template #label="{ item, modelValue }">
      <slot
        name="label"
        :item="item"
        :model-value="modelValue"
      />
    </template>

    <template #description="{ item, modelValue }">
      <slot
        name="description"
        :item="item"
        :model-value="modelValue"
      />
    </template>
  </URadioGroup>
</template>
