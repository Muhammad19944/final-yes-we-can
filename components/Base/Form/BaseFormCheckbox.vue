<script lang="ts">
import type { AcceptableValue } from '@nuxt/ui'
import type { ColorType, IndicatorType, RadioVariantType, SizeType } from '~/types/libs'
import type { HeadingEntity } from '../Heading/BaseHeading.vue'

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
  text?: HeadingEntity
  ui?: {
    root?: string | string[]
    container?: string | string[]
    base?: string | string[]
    indicator?: string | string[]
    icon?: string | string[]
    wrapper?: string | string[]
    label?: string | string[]
    description?: string | string[]
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
  value: 'on',
  text: () => ({
    level: 'h9',
    weight: 'medium',
    color: 'text-(--color-greyscale-900)'
  })
})
const emit = defineEmits<{
  (e: 'change', payload: Event, model: ModelType | undefined): void
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
      base: ['rounded-full', ui?.base],
      indicator: ['p-[3px]', ui?.indicator],
      icon: [ui?.icon],
      wrapper: ['-mt-[1px]', ui?.wrapper],
      label: [text.level, text.weight, text.color, ui?.label],
      description: [ui?.description]
    }"
    @change="emit('change', $event, model)"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #label="{ label }">
      <slot
        name="label"
        :label="label"
      >
        <BaseHeading
          :text="label"
          :level="text.level"
          :weight="text.weight"
          :color="text.color"
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
