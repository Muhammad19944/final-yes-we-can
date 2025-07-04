<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  code: z.string().min(4, 'Must be at least 4 characters')
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const state = reactive<Partial<Schema>>({
  code: undefined
})

const handleRegister = (event: FormSubmitEvent<Schema>) => {
  console.log('event', event)
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
      text="Raqamni tasdiqlash"
      level="h4"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-0.5'
      }"
    />

    <BaseHeading
      text="Sizning elektron manzilingizga kelgan maxsus kodni kiriting"
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
      @submit="handleRegister"
    >
      <BaseFormField
        label="imuhammadibragimov1994@gmail.com"
        name="email"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormInput
          v-model="state.code"
          size="2xl"
          placeholder="Enter code"
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
        :ui="{
          base: 'cursor-pointer mt-6'
        }"
      >
        Tasdiqlayman
      </BaseButton>

      <div class="text-center mt-5">
        <BaseButton
          icon="solar:restart-outline"
          variant="link"
          :ui="{
            base: 'cursor-pointer'
          }"
        >
          Qaytadan yuborish
        </BaseButton>
      </div>
    </BaseForm>
  </BaseSheet>
</template>
