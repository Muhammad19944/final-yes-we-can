<script lang="ts">
import type { ColorType, SizeType, OrientationType } from '~/types/libs'

export interface BaseProgressEntity {
  as?: string
  max?: number
  status?: boolean
  inverted?: boolean
  size?: Exclude<SizeType, '3xs' | '3xl'>
  color?: ColorType
  orientation?: OrientationType
  animation?: 'carousel' | 'carousel-inverse' | 'swing' | 'elastic'
  modelValue?: null | number
  getValueLabel?: (value: number | null | undefined, max: number) => string | undefined
  getValueText?: (value: number | null | undefined, max: number) => string | undefined
  rounded?: boolean
  ui?: {
    root?: string | string[]
    base?: string | string[]
    indicator?: string | string[]
    status?: string | string[]
    steps?: string | string[]
    step?: string | string[]
  }
}
</script>

<script setup lang="ts">
withDefaults(defineProps<BaseProgressEntity>(), {
  as: 'div',
  size: 'md',
  orientation: 'horizontal',
  animation: 'carousel',
  modelValue: null
})

const slots = defineSlots<{
  status(props: { percent?: number | undefined }): unknown
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[] | undefined): unknown
  (e: 'update:max', value: number): unknown
}>()
</script>

<template>
  <UProgress
    :as="as"
    :max="max"
    :status="status"
    :inverted="inverted"
    :size="size"
    :color="color"
    :orientation="orientation"
    :animation="animation"
    :model-value="modelValue"
    :get-value-label="getValueLabel"
    :get-value-text="getValueText"
    :ui="{
      root: [ui?.root],
      base: [ui?.base],
      indicator: [ui?.indicator],
      status: [ui?.status],
      steps: [ui?.step],
      step: [ui?.step]
    }"
    @update:model-value="(value) => emit('update:modelValue', value)"
    @update:max="(value) => emit('update:max', value)"
  >
    <template
      v-if="slots.status"
      #status="{ percent }"
    >
      <slot
        name="status"
        :percent="percent"
      />
    </template>
  </UProgress>
</template>
