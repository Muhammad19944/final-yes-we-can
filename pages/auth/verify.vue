<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  code: z.string().min(4, 'Must be at least 4 characters')
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
const route = useRoute()
const { $toast } = useNuxtApp()
const { locale } = useI18n()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

definePageMeta({
  layout: 'auth'
})

const model = reactive<Partial<Schema>>({
  email: (route.query.email as string) ?? undefined,
  code: undefined
})
const forget = ref((route.query.forget as string) ?? undefined)

const handleVerify = async (event: FormSubmitEvent<Schema>) => {
  const path = route.query.forget === 'true' ? 'change-password' : 'login'

  try {
    setLoading(true)
    await useClientFetch('/api/account/verify/verify-code', {
      method: 'post',
      body: event.data
    })
    navigateTo(`/${locale.value}/auth/${path}`)
  } catch (error) {
    /* empty */
  } finally {
    await sleep()
    setLoading(false)
  }

  console.log('path', path)
  console.log('event', event)
}

onMounted(async () => {
  await useClientFetch('/api/account/verify/send-code', {
    method: 'post',
    body: {
      email: model.email,
      forget: forget.value === 'true'
    }
  })
  $toast({
    title: 'Emailga',
    description: `Tasdiqlash kodi yuborildi`,
    icon: 'solar:mailbox-outline'
  })
})
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
      :state="model"
      :ui="{
        root: 'mt-8'
      }"
      @submit="handleVerify"
    >
      <BaseFormField
        label="Elektron manzil"
        name="email"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormInput
          :model-value="model.email"
          size="2xl"
          placeholder="Elektron manzilni kirting"
          readonly
          :ui="{
            root: 'w-full'
          }"
        />
      </BaseFormField>

      <BaseFormField
        label="Tasdiqlovchi kod"
        name="code"
        :ui="{
          root: 'mb-6'
        }"
      >
        <BaseFormInput
          v-model="model.code"
          size="2xl"
          placeholder="Tasdiqlovchi kodni kiriting"
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
