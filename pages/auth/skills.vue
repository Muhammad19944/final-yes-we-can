<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  last_name: z.string().min(1, { message: 'Enter your last name' }),
  first_name: z.string().min(1, { message: 'Enter your first name' }),
  info: z.object({
    location: z.number().min(1, { message: 'Select your location' }),
    profession: z.string().min(1, { message: 'Enter your profession' }),
    technologies: z.array(z.number()).min(1, { message: 'Select at least one technology' })
  })
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
const router = useRouter()
const { locale } = useI18n()
const { loading, setLoading } = useLoader()
const { loading: modal, setLoading: setModal } = useLoader()
const { sleep } = useTimeout()

definePageMeta({
  layout: 'auth'
})

const model = reactive<Schema>({
  last_name: '',
  first_name: '',
  info: {
    location: 0,
    profession: '',
    technologies: []
  }
})

const handleSkills = async (event: FormSubmitEvent<Schema>) => {
  try {
    setLoading(true)
    await useClientFetch('/api/account/account/me', {
      method: 'patch',
      body: event.data
    })
    setModal(true)
  } catch (error) {
    /* empty */
  } finally {
    await sleep()
    setLoading(false)
  }
}
</script>

<template>
  <BaseForm
    :schema="schema"
    :state="model"
    :ui="{
      root: 'flex flex-col items-center w-full'
    }"
    @submit="handleSkills"
  >
    <div class="flex-1 max-w-[865px] w-full space-y-3 py-14">
      <BaseSheet
        shadow="shadow-2"
        :ui="{
          root: 'py-6 px-8'
        }"
      >
        <BaseHeading
          text="Umumiy"
          level="h4"
          weight="semi"
          color="text-(--color-greyscale-900)"
          :ui="{
            root: 'mb-3'
          }"
        />

        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1">
            <BaseFormField name="last_name">
              <BaseFormInput
                v-model="model.last_name"
                size="2xl"
                placeholder="Familiya"
                :ui="{
                  root: 'w-full'
                }"
              />
            </BaseFormField>
          </div>

          <div class="col-span-1">
            <BaseFormField name="first_name">
              <BaseFormInput
                v-model="model.first_name"
                size="2xl"
                placeholder="Ism"
                :ui="{
                  root: 'w-full'
                }"
              />
            </BaseFormField>
          </div>

          <div class="col-span-2">
            <BaseFormField name="info.location">
              <SelectLocation v-model="model.info.location" />
            </BaseFormField>
          </div>
        </div>
      </BaseSheet>

      <BaseSheet
        shadow="shadow-2"
        :ui="{
          root: 'py-6 px-8'
        }"
      >
        <BaseHeading
          text="Kasb va faoliyat"
          level="h4"
          weight="semi"
          color="text-(--color-greyscale-900)"
          :ui="{
            root: 'mb-3'
          }"
        />

        <BaseFormField name="info.profession">
          <BaseFormInput
            v-model="model.info.profession"
            size="2xl"
            placeholder="Kasb va faoliyat"
            :ui="{
              root: 'w-full'
            }"
          />
        </BaseFormField>
      </BaseSheet>

      <BaseSheet
        shadow="shadow-2"
        :ui="{
          root: 'py-6 px-8'
        }"
      >
        <BaseHeading
          text="Qobiliyatlar"
          level="h4"
          weight="semi"
          color="text-(--color-greyscale-900)"
          :ui="{
            root: 'mb-3'
          }"
        />

        <BaseFormField name="info.technologies">
          <WidgetProjectCategory v-model="model.info.technologies" />
        </BaseFormField>
      </BaseSheet>
    </div>

    <NavigationFooterStepper
      :next="{
        text: 'Davom ettirish',
        loading: loading
      }"
      :ui="{
        content: 'max-w-[865px]'
      }"
      @emit:prev="router.go(-1)"
    />

    <ModalCongratulations
      v-model="modal"
      @emit:up="() => navigateTo({ path: `/${locale}` })"
    />
  </BaseForm>
</template>
