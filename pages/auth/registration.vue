<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().email('Enter valid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  password2: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
const { t } = useI18n()
// const toast = useToast()

definePageMeta({
  layout: 'auth'
})

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
  password2: undefined
})
const termAndCondition = ref(false)

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
      text="Ro‘yxatdan o‘tish"
      level="h4"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-0.5'
      }"
    />

    <BaseHeading
      text="Ro‘yxatdan o‘tish uchun iltimos, ma’lumotlaringizni kiriting!"
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
        label="Email"
        name="email"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormInput
          v-model="state.email"
          size="2xl"
          placeholder="Enter email"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <BaseFormField
        label="Telefon"
        name="password"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormPassword
          v-model="state.password"
          size="2xl"
          placeholder="Enter password"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <BaseFormField
        label="Telefon"
        name="password2"
        :ui="{
          root: 'mb-3'
        }"
      >
        <BaseFormPassword
          v-model="state.password2"
          size="2xl"
          placeholder="Repeat password"
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <BaseFormCheckbox v-model="termAndCondition">
        <template #label>
          <i18n-t
            keypath="term_and_condition.text"
            tag="div"
            scope="global"
            class="flex items-center gap-1"
          >
            <template #term>
              <NuxtLinkLocale
                to="/"
                class="text-(--color-green-500) underline underline-offset-2"
              >
                <BaseHeading
                  :text="t('term_and_condition.term')"
                  weight="medium"
                />
              </NuxtLinkLocale>
            </template>

            <template #condition>
              <NuxtLinkLocale
                to="/"
                class="text-(--color-green-500) underline underline-offset-2"
              >
                <BaseHeading
                  :text="t('term_and_condition.condition')"
                  weight="medium"
                />
              </NuxtLinkLocale>
            </template>
          </i18n-t>
        </template>
      </BaseFormCheckbox>

      <BaseButton
        type="submit"
        color="gradient"
        size="2xl"
        rounded="xl"
        block
        :disabled="!termAndCondition"
        :ui="{
          base: 'cursor-pointer mt-6'
        }"
      >
        Ro'yxatdan o'tish
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
          text="Allaqachon ro’yxatdan o’tganmisiz?"
          weight="medium"
          color="text-(--color-greyscale-500)"
        />

        <NuxtLinkLocale
          to="/auth/login"
          class="text-(--color-green-500) underline underline-offset-2"
        >
          <BaseHeading
            text="Kirish"
            weight="medium"
          />
        </NuxtLinkLocale>
      </div>
    </BaseForm>
  </BaseSheet>
</template>
