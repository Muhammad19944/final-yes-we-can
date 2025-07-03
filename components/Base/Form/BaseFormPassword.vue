<script lang="ts">
import type { FormInputEntity } from '~/components/Base/Form/BaseFormInput.vue'

export interface FormPasswordEntity extends FormInputEntity {
  showIcon?: string
  hideIcon?: string
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<FormPasswordEntity>(), {
  placeholder: 'Enter password',
  showIcon: 'solar:eye-outline',
  hideIcon: 'solar:eye-closed-outline',
  rounded: 'xl' as const
})

const model = useModel(props, 'modelValue')
const togglePasswordType = ref(true)
</script>

<template>
  <BaseFormInput
    :id="id"
    v-model="model"
    :as="as"
    :name="name"
    :type="togglePasswordType ? 'password' : 'text'"
    :placeholder="placeholder"
    :color="color"
    :variant="variant"
    :size="size"
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
    :rounded="rounded"
    :ui="{
      root: ui?.root,
      base: ui?.base,
      leading: ui?.leading,
      leadingIcon: ui?.leadingIcon,
      trailingIcon: ui?.trailingIcon,
      trailing: ui?.trailing
    }"
  >
    <template #trailing>
      <BaseButton
        color="neutral"
        variant="link"
        square
        size="lg"
        :icon="togglePasswordType ? props.showIcon : props.hideIcon"
        :aria-label="togglePasswordType ? 'Show password' : 'Hide password'"
        :aria-pressed="togglePasswordType"
        aria-controls="password"
        @click="togglePasswordType = !togglePasswordType"
      />
    </template>
  </BaseFormInput>
</template>
