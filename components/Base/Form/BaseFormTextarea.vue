<script lang="ts">
import { useRounded } from '~/composables/useRounded'
import type { ColorType, VariantType, SizeType } from '~/types/libs'
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'

type ModelType = null | string | number

export interface BaseTextareaEntity {
  as?: string
  id?: string
  name?: string
  placeholder?: string
  color?: ColorType
  variant?: Exclude<VariantType, 'link' | 'solid'> | 'none'
  size?: Exclude<SizeType, '3xs' | '2xs' | '2xl' | '3xl'>
  required?: boolean
  autofocus?: boolean
  autofocusDelay?: number
  autoresize?: boolean
  autoresizeDelay?: number
  disabled?: boolean
  rows?: number
  maxrows?: number
  highlight?: boolean
  modelValue?: ModelType
  defaultValue?: ModelType
  modelModifiers?: {
    string?: boolean | undefined
    number?: boolean | undefined
    trim?: boolean | undefined
    lazy?: boolean | undefined
    nullify?: boolean | undefined
  }
  icon?: string
  avatar?: AvatarEntity
  leading?: boolean
  leadingIcon?: string
  trailing?: boolean
  trailingIcon?: string
  loading?: boolean
  loadingIcon?: string
  rounded?: boolean | SizeType
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
const textareaRef = useTemplateRef('textareaRef')
const slots = useSlots()

const props = withDefaults(defineProps<BaseTextareaEntity>(), {
  as: 'div',
  color: 'primary',
  variant: 'subtle',
  size: 'md',
  autofocusDelay: 0,
  autoresizeDelay: 0,
  rows: 3,
  maxrows: 0,
  rounded: 'lg' as const
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: ModelType): void
  (e: 'blur', value: FocusEvent): void
  (e: 'change', value: Event): void
}>()

defineExpose({ textareaRef })

const { defineRounded } = useRounded(computed(() => props.rounded))
</script>

<template>
  <UTextarea
    :id="id"
    ref="textareaRef"
    :as="as"
    :name="name"
    :placeholder="placeholder"
    :color="color"
    :variant="variant"
    :size="size"
    :required="required"
    :autofocus="autofocus"
    :autofocus-delay="autofocusDelay"
    :autoresize="autoresize"
    :autoresize-delay="autoresizeDelay"
    :disabled="disabled"
    :rows="rows"
    :maxrows="maxrows"
    :highlight="highlight"
    :model-value="modelValue"
    :default-value="defaultValue"
    :model-modifiers="modelModifiers"
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
      base: [defineRounded, ui?.base],
      leading: [ui?.leading],
      leadingIcon: [ui?.leadingIcon],
      leadingAvatar: [ui?.leadingAvatar],
      leadingAvatarSize: [ui?.leadingAvatarSize],
      trailing: [ui?.trailing],
      trailingIcon: [ui?.trailingIcon]
    }"
    @update:model-value="(value) => emit('update:modelValue', value)"
    @blur="(value) => emit('blur', value)"
    @change="(value) => emit('change', value)"
  >
    <template
      v-if="slots.leading"
      #leading
    >
      <slot name="leading" />
    </template>

    <template #default>
      <slot name="default" />
    </template>

    <template
      v-if="slots.trailing"
      #trailing
    >
      <slot name="trailing" />
    </template>
  </UTextarea>
</template>
