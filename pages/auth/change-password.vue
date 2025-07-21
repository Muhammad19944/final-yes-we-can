<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .regex(/.{8,}/, { message: 'At least 8 characters' })
      .regex(/\d/, { message: 'At least 1 number' })
      .regex(/[a-z]/, { message: 'At least 1 lowercase letter' })
      .regex(/[A-Z]/, { message: 'At least 1 uppercase letter' }),
    password2: z.string().min(8, 'Must be at least 8 characters')
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.password2) {
      ctx.addIssue({
        path: ['password2'],
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match'
      })
    }
  })

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
const { $toast } = useNuxtApp()
const { locale } = useI18n()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

definePageMeta({
  layout: 'auth'
})

const model = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
  password2: undefined
})

const handleChangePassword = async (event: FormSubmitEvent<Schema>) => {
  try {
    setLoading(true)
    await useClientFetch('/api/account/account/change-password', {
      method: 'put',
      body: event.data
    })
    $toast({
      title: `Parol muvaffaqiyatli o'zgartirildi`,
      icon: 'solar:check-circle-outline'
    })
    navigateTo(`/${locale.value}/auth/login`)
  } catch (error) {
    /* empty */
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
      text="Parolni o'zgartirish"
      level="h4"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-0.5'
      }"
    />

    <BaseHeading
      text="Parolni o'zgartirish uchun iltimos, ma'lumotlaringizni kiriting!"
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
      @submit="handleChangePassword"
    >
      <BaseFormField
        label="Elektron manzilni kirting"
        name="email"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormInput
          v-model="model.email"
          size="2xl"
          placeholder="Elektron manzilni kiriting"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <BaseFormField
        label="Parol"
        name="password"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormPassword
          v-model="model.password"
          size="2xl"
          placeholder="Parolni kiriting"
          set-password-strength
          :password-strength-schema="schema._def.schema.shape.password._def.checks"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <BaseFormField
        label="Parol"
        name="password2"
        :ui="{
          root: 'mb-3'
        }"
      >
        <BaseFormPassword
          v-model="model.password2"
          size="2xl"
          placeholder="Parolni qayta tering"
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
        Parolni o'zgartirish
      </BaseButton>
    </BaseForm>
  </BaseSheet>
</template>
