<script lang="ts">
import * as z from 'zod'
import { useAccountStore } from '~/stores/account'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().min(8, 'Enter correct number'),
  password: z
    .string()
    .regex(/.{8,}/, { message: 'At least 8 characters' })
    .regex(/\d/, { message: 'At least 1 number' })
    .regex(/[a-z]/, { message: 'At least 1 lowercase letter' })
    .regex(/[A-Z]/, { message: 'At least 1 uppercase letter' })
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
const { locale } = useI18n()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()
const accountStore = useAccountStore()

definePageMeta({
  layout: 'auth'
})

const state = reactive<Partial<Schema>>({
  email: 'imuhammadibragimov1994@gmail.com',
  password: 'Muhammad1994'
})

const login = async (event: FormSubmitEvent<Schema>) => {
  try {
    setLoading(true)
    await useClientFetch('/api/account/auth/login', {
      method: 'post',
      body: event.data
    })
    await accountStore.getAccount()
    navigateTo(`/${locale.value}/${!accountStore.account?.role ? 'auth/role' : ''}`)
  } catch (error) {
    /* empty */
  } finally {
    await sleep()
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
      text="Kirish"
      level="h4"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-0.5'
      }"
    />

    <BaseHeading
      text="Tizimga kirish uchun iltimos, ma’lumotlaringizni kiriting!"
      level="h8"
      weight="medium"
      color="text-(--color-greyscale-500)"
    />

    <BaseForm
      :schema="schema"
      :state="state"
      :ui="{
        root: 'mt-8'
      }"
      @submit="login"
    >
      <BaseFormField
        label="Elektron manzil"
        name="email"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormInput
          v-model="state.email"
          size="2xl"
          placeholder="Elektron manzilni kirting"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <BaseFormField
        label="Parol"
        name="password"
        :ui="{
          root: 'mb-3'
        }"
      >
        <BaseFormPassword
          v-model="state.password"
          size="2xl"
          placeholder="Parolni kiriting"
          set-password-strength
          :password-strength-schema="schema.shape.password._def.checks"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <div class="flex justify-end mb-6">
        <NuxtLinkLocale
          to="/auth/forget"
          class="underline underline-offset-2 text-(--color-green-500)"
        >
          <BaseHeading
            text="Parolni unutdingzimi?"
            weight="semi"
          />
        </NuxtLinkLocale>
      </div>

      <BaseButton
        type="submit"
        color="gradient"
        size="2xl"
        rounded="xl"
        block
        :loading="loading"
        :ui="{
          base: 'cursor-pointer'
        }"
      >
        Tizimga kirish
      </BaseButton>

      <BaseSeparator
        label="yoki"
        container
        :ui="{
          root: 'my-4'
        }"
      />

      <ButtonSocialList />

      <div class="flex items-center gap-2">
        <BaseHeading
          text="Hali ro’yxatdan o’tmaganmisiz?"
          weight="medium"
          color="text-(--color-greyscale-500)"
        />

        <NuxtLinkLocale to="/auth/registration">
          <BaseHeading
            text="Ro’yxatdan o’tish"
            weight="medium"
            color="text-(--color-green-500)"
          />
        </NuxtLinkLocale>
      </div>
    </BaseForm>
  </BaseSheet>
</template>
