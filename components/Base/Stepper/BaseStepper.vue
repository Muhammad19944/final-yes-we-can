<script lang="ts">
import type { StepperItem } from '@nuxt/ui'
import type { ColorType, SizeType, OrientationType } from '~/types/libs'

export interface BaseStepperEntity {
  as?: string
  items: StepperItem[]
  size?: Exclude<SizeType, '3xs' | '2xs' | '2xl' | '3xl'>
  color?: ColorType
  orientation?: OrientationType
  defaultValue?: string | number
  disabled?: boolean
  linear?: boolean
  modelValue?: string | number
  ui?: {
    root: string | string[]
    header: string | string[]
    item: string | string[]
    container: string | string[]
    trigger: string | string[]
    indicator: string | string[]
    icon: string | string[]
    separator: string | string[]
    wrapper: string | string[]
    title: string | string[]
    description: string | string[]
    content: string | string[]
  }
}
</script>

<script setup lang="ts">
const stepper = useTemplateRef('stepper')

withDefaults(defineProps<BaseStepperEntity>(), {
  as: 'div',
  size: 'md',
  color: 'primary',
  orientation: 'horizontal',
  linear: true
})

defineSlots<{
  indicator(props: { item: StepperItem }): unknown
  title(props: { item: StepperItem }): unknown
  description(props: { item: StepperItem }): unknown
  content(props: { item: StepperItem }): unknown
}>()

defineExpose({ stepper })

const emit = defineEmits<{
  (e: 'next' | 'prev', value: StepperItem): void
  (e: 'update:modelValue', value: string | number | undefined): void
}>()
</script>

<template>
  <UStepper
    ref="stepper"
    :as="as"
    :items="items"
    :size="size"
    :color="color"
    :orientation="orientation"
    :default-value="defaultValue"
    :disabled="disabled"
    :linear="linear"
    :model-value="modelValue"
    :ui="{
      root: [ui?.root],
      header: [ui?.header],
      item: [ui?.item],
      container: [ui?.container],
      trigger: [ui?.trigger],
      indicator: [ui?.indicator],
      icon: [ui?.icon],
      separator: [ui?.separator],
      wrapper: [ui?.wrapper],
      title: [ui?.title],
      description: [ui?.description],
      content: [ui?.content]
    }"
    @prev="(value) => emit('prev', value)"
    @next="(value) => emit('next', value)"
    @update:model-value="(value) => emit('update:modelValue', value)"
  >
    <template #indicator="{ item }">
      <slot
        name="indicator"
        :item="item"
      />
    </template>

    <template #title="{ item }">
      <slot
        name="title"
        :item="item"
      />
    </template>

    <template #description="{ item }">
      <slot
        name="description"
        :item="item"
      />
    </template>

    <template #content="{ item }">
      <slot
        name="content"
        :item="item"
      />
    </template>
  </UStepper>
</template>
