<script lang="ts">
import type { AcceptableValue } from '@nuxt/ui'
import type { ColorType, IndicatorType, RadioVariantType, SizeType } from '~/types/utils'

type ModelType = boolean | 'indeterminate'

export interface BaseFormCheckboxEntity {
  as?: string
  label?: string
  description?: string
  color?: ColorType
  variant?: Exclude<RadioVariantType, 'table'>
  size?: Exclude<SizeType, '3xs' | '2xs' | '2xl' | '3xl'>
  indicator?: IndicatorType
  icon?: string
  indeterminateIcon?: string
  disabled?: boolean
  value?: AcceptableValue
  name?: string
  required?: boolean
  id?: string
  defaultValue?: ModelType
  modelValue?: ModelType
  ui?: {
    root: string | string[]
    container: string | string[]
    base: string | string[]
    indicator: string | string[]
    icon: string | string[]
    wrapper: string | string[]
    label: string | string[]
    description: string | string[]
  }
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  labelSlot?: object
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  descriptionSlot?: object
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseFormCheckboxEntity>(), {
  as: 'div',
  color: 'primary',
  variant: 'list',
  size: 'md',
  value: 'on'
})
const emit = defineEmits<{
  (e: 'change', payload: Event): void
  (e: 'update:modelValue', payload: ModelType): void
}>()
const model = useModel(props, 'modelValue')
</script>

<template>
  <UCheckbox
    :id="id"
    v-model="model"
    :as="as"
    :label="label"
    :description="description"
    :color="color"
    :variant="variant"
    :size="size"
    :indicator="indicator"
    :icon="icon"
    :indeterminate-icon="indeterminateIcon"
    :disabled="disabled"
    :value="value"
    :name="name"
    :required="required"
    :default-value="defaultValue"
    :indeterminate="model === 'indeterminate'"
    :ui="{
      root: [ui?.root],
      container: [ui?.container],
      base: ['size-5 rounded-full', ui?.base],
      indicator: ['p-[3px]', ui?.indicator],
      icon: [ui?.icon],
      wrapper: ['-mt-[1px]', ui?.wrapper],
      label: [ui?.label],
      description: [ui?.description]
    }"
    @change="emit('change', $event)"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #label="{ label }">
      <slot
        name="label"
        :label="label"
      >
        <BaseHeading
          :text="label"
          weight="medium"
          color="text-[var(--color-greyscale-900)]"
        />
      </slot>
    </template>

    <template #description="{ description }">
      <slot
        name="description"
        :description="description"
      />
    </template>
  </UCheckbox>
</template>
