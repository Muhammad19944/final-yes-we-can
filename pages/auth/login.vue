<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().min(8, 'Enter correct number'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
const toast = useToast()

definePageMeta({
  layout: 'auth'
})

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const onSubmit = (event: FormSubmitEvent<Schema>) => {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
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
      @submit="onSubmit"
    >
      <BaseFormField
        label="Telefon raqam"
        name="email"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormInput
          v-model="state.email"
          maska="+### ## ### ## ##"
          size="2xl"
          placeholder="Enter number"
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
          placeholder="Min. 8 ta belgi"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <div class="flex justify-end mb-6">
        <NuxtLinkLocale
          to="/"
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
