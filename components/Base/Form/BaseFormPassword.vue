<script lang="ts">
import type { FormInputEntity } from '~/components/Base/Form/BaseFormInput.vue'

export interface FormPasswordEntity extends FormInputEntity {
  showIcon?: string
  hideIcon?: string
  setPasswordStrength?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  passwordStrengthSchema?: Record<string, any>[]
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

const checkStrength = (str: string | null | undefined) => {
  if (props.passwordStrengthSchema) {
    return props.passwordStrengthSchema.map((schema) => ({ met: str ? schema.regex.test(str) : false, text: schema.message }))
  }

  return []
}

const strength = computed(() => checkStrength(model.value))
const score = computed(() => strength.value.filter((req) => req.met).length)
const color = computed(() => {
  if (!props.setPasswordStrength) {
    return props.color
  }

  switch (score.value) {
    case 0:
      return props.color
    case 1:
      return 'error'
    case 2:
      return 'warning'
    case 3:
      return 'warning'
    default:
      return 'success'
  }
})
const text = computed(() => {
  switch (score.value) {
    case 0:
      return 'Enter a password'
    case 2:
      return 'Weak password'
    case 3:
      return 'Medium password'
    default:
      return 'Strong password'
  }
})
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

  <template v-if="setPasswordStrength">
    <UProgress
      :color="color"
      :indicator="text"
      :model-value="score"
      :max="4"
      size="sm"
      :ui="{
        root: 'w-[calc(100%-8px)] mx-auto mt-1'
      }"
    />

    <template v-if="setPasswordStrength">
      <BaseHeading
        :text="`${text}. Must contain:`"
        weight="medium"
        :ui="{
          root: 'mt-1 mb-1.5'
        }"
      />

      <ul
        class="space-y-1.5"
        aria-label="Password requirements"
      >
        <li
          v-for="(req, index) in strength"
          :key="index"
          class="flex items-center gap-1"
          :class="req.met ? 'text-(--color-green-500)' : 'text-(--color-greyscale-600)'"
        >
          <UIcon
            :name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'"
            class="size-4 shrink-0"
          />

          <span class="text-xs">
            {{ req.text }}
            <span class="sr-only">
              {{ req.met ? ' - Requirement met' : ' - Requirement not met' }}
            </span>
          </span>
        </li>
      </ul>
    </template>
  </template>
</template>
