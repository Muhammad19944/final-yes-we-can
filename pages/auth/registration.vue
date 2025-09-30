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
const { t, locale } = useI18n()
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
const termAndCondition = ref(false)

const handleRegister = async (event: FormSubmitEvent<Schema>) => {
  try {
    setLoading(true)
    await useClientFetch('/api/account/auth/register', { method: 'post', body: event.data })
    $toast({
      title: `Siz muvaffaqiyatli ro'yxatdan o'tdingiz`,
      icon: 'solar:check-circle-outline'
    })
    await navigateTo(`/${locale.value}/auth/verify?email=${model.email}`)
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
      :state="model"
      :ui="{
        root: 'mt-8'
      }"
      @submit="handleRegister"
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
        :loading="loading"
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
