<script lang="ts">
import type { FormError, FormErrorEvent, FormInputEvents, FormSubmitEvent } from '@nuxt/ui'

export interface BaseFormEntity {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: Partial<any>
  id?: string | number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate?: (state: Partial<any>) => FormError<string>[] | Promise<FormError<string>[]>
  validateOn?: FormInputEvents[]
  disabled?: boolean
  validateOnInputDelay?: number
  transform?: boolean
  attach?: boolean
  loadingAuto?: boolean
  ui?: {
    root?: string | string[]
  }
}
</script>

<script setup lang="ts">
withDefaults(defineProps<BaseFormEntity>(), {
  validateOn() {
    return ['input', 'blur', 'change'] as FormInputEvents[]
  },
  validateOnInputDelay: 300,
  transform: true,
  attach: true,
  loadingAuto: true
})

const emit = defineEmits<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: 'submit', value: FormSubmitEvent<any>): void

  (e: 'error', value: FormErrorEvent): void
}>()
</script>

<template>
  <UForm
    :id="id"
    :state="state"
    :schema="schema"
    :validate="validate"
    :validate-on="validateOn"
    :disabled="disabled"
    :validate-on-input-delay="validateOnInputDelay"
    :transform="transform"
    :attach="attach"
    :loading-auto="loadingAuto"
    :class="[ui?.root]"
    @submit="(value) => emit('submit', value)"
    @error="(value) => emit('error', value)"
  >
    <template #default>
      <slot name="default" />
    </template>
  </UForm>
</template>
