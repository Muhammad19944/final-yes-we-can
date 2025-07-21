<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' })
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
const { locale } = useI18n()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

definePageMeta({
  layout: 'auth'
})

const model = reactive<Partial<Schema>>({
  email: undefined
})

const handleForget = async (event: FormSubmitEvent<Schema>) => {
  try {
    setLoading(true)
    navigateTo(`/${locale.value}/auth/verify?email=${event.data.email}&forget=${true}`)
  } finally {
    await sleep(500)
    setLoading(false)
  }
}
</script>

<template>
  <BaseSheet
    shadow="shadow-2"
    :ui="{
      root: 'max-w-[535px] w-full py-8 px-10'
    }"
  >
    <BaseHeading
      text="Elektron manzilni kirting"
      level="h4"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-0.5'
      }"
    />

    <BaseHeading
      text="Sizning elektron manzilingizga maxsus kod yuboriladi"
      level="h8"
      weight="medium"
      color="text-(--color-greyscale-500)"
    />

    <BaseForm
      :schema="schema"
      :state="model"
      :ui="{
        root: 'mt-8'
      }"
      @submit="handleForget"
    >
      <BaseFormField
        label="Elektron manzil"
        name="email"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormInput
          v-model="model.email"
          size="2xl"
          placeholder="Elektron manzilni kirting"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <BaseButton
        type="submit"
        color="gradient"
        size="2xl"
        rounded="xl"
        block
        :loading="loading"
        :ui="{
          base: 'cursor-pointer mt-6'
        }"
      >
        Davom etish
      </BaseButton>
    </BaseForm>
  </BaseSheet>
</template>
