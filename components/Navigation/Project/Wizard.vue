<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { useProjectStore } from '~/stores/Projects'
import { stepTypes, type PrePublishStepTypes, type CrudType } from '~/types/utils'

interface WizardEntity {
  type?: Exclude<CrudType, 'update' | 'delete'>
}

interface StepItemEntity {
  title: string
  value: PrePublishStepTypes
}

interface StepMetaSubItemEntity {
  title: string
  description: string[]
}

interface StepMetaItemEntity {
  title: string
  description: string | StepMetaSubItemEntity
  index: number
}
</script>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
const stepper = useTemplateRef('stepper')
const projectStore = useProjectStore()

const props = withDefaults(defineProps<WizardEntity>(), {
  type: 'create'
})

const stepperRef = ref()
const steppers = ref<StepItemEntity[]>([
  {
    title: 'Loyiha nomi',
    value: 'title'
  },
  {
    title: 'Qobiliyatlar',
    value: 'technologies'
  },
  {
    title: 'Loyiha hajmi',
    value: 'size'
  },
  {
    title: 'Loyiha narxi',
    value: 'description'
  },
  {
    title: 'Ish tavsifi',
    value: 'overview'
  }
])
const step = ref(0)
const stepMeta = ref<Record<PrePublishStepTypes, StepMetaItemEntity>>({
  title: {
    title: 'Loyihaning nomi',
    description: `Bu sizning ish joyingiz to'g'ri nomzodlar oldida turishiga yordam beradi. Bu ular ko'radigan birinchi narsa, shuning uchun buni hisobga oling!`,
    index: 1
  },
  technologies: {
    title: 'Qobiliyatlar',
    description: `Sizning ishingiz uchun zarur bo'lgan asosiy ko'nikmalar qanday?`,
    index: 2
  },
  size: {
    title: 'Loyiha hajmi',
    description: `Loyihangizning hajmini va unga qancha vaqt ketishini hisobga oling.`,
    index: 3
  },
  description: {
    title: 'Loyiha narxi',
    description: `Bu sizga o'z doirangizdagi iste'dodlarga moslashishimizga yordam beradi`,
    index: 4
  },
  overview: {
    title: 'Ishning tavsifi',
    description: {
      title: 'Odatda frilanserlar quyidagilarga e’tibor beradilar:',
      description: [
        `Sizning vazifangiz yoki natijalaringiz haqida aniq taxminlar`,
        `Sizning ishingiz uchun zarur bo'lgan ko'nikmalar`,
        `Yaxshi muloqot`,
        `Siz yoki jamoangiz qanday ishlashni yoqtirishi haqida tafsilotlar`
      ]
    },
    index: 5
  }
})

const isStepTypes = (step: string): step is PrePublishStepTypes => {
  return (stepTypes as readonly string[]).includes(step)
}

const routeLastPath = () => {
  const splitPath = route.fullPath.split('/')
  return splitPath[splitPath.length - 1]
}

const currentStepMeta = computed(() => {
  const lastPath = routeLastPath()

  if (isStepTypes(lastPath)) {
    return stepMeta.value[lastPath]
  }

  return stepMeta.value.title
})
const stepProgress = computed(() => currentStepMeta.value.index - 1)

const currentSchema = computed(() => {
  const lastPath = routeLastPath()

  if (isStepTypes(lastPath)) {
    switch (lastPath) {
      case 'technologies':
        return z.object({
          technologies: z.array(z.string()).nonempty()
        })
      case 'size':
        return z.object({
          size: z.string({ message: 'Quidagilardan biri tanlanishi shart' }),
          duration: z.string({ message: 'Quidagilardan biri tanlanishi shart' }),
          level: z.string({ message: 'Quidagilardan biri tanlanishi shart' }),
          type: z.string({ message: 'Quidagilardan biri tanlanishi shart' })
        })
      case 'description':
        return z.object({
          price: z.string({ message: 'Summani kiriting' })
        })
      default: // title
        return z.object({
          title: z.string().min(8, 'Must be at least 8 characters')
        })
    }
  }

  return z.object({
    title: z.string().min(8, 'Must be at least 8 characters')
  })
})

const createProject = async () => {
  const lastPath = routeLastPath()

  if (isStepTypes(lastPath)) {
    switch (lastPath) {
      case 'technologies':
        await projectStore.patchProject({ technologies: [1, 2, 3] })
        break
      default: // title
        await projectStore.createProject({ title: projectStore.projectRequest.title })
        navigateTo(`/${locale.value}/project/create/technologies`)
    }
  }
}

const updateProject = () => {}

const submit = async (event: FormSubmitEvent<z.output<typeof currentSchema.value>>) => {
  if (props.type === 'create') {
    await createProject()
  } else {
    updateProject()
  }

  console.log(event.data)
  // await navigateTo(`/${locale.value}/project/create/technologies`)
  // stepperRef?.value.next()
}

const prevStep = () => {
  router.go(-1)
  stepperRef?.value.prev()
}

onMounted(() => {
  const _stepper = unref(stepper)

  if (_stepper) {
    stepperRef.value = _stepper.stepper
  }
})
</script>

<template>
  <div class="project-wizard-view flex flex-col min-h-[calc(100vh-64px)]">
    <div class="max-w-[1200px] w-full mx-auto pt-10">
      <BaseStepper
        ref="stepper"
        v-model="step"
        :items="steppers"
        disabled
      />
    </div>

    <pre>{{ projectStore.projectRequest }}</pre>

    <BaseForm
      :schema="currentSchema"
      :state="projectStore.projectRequest"
      :ui="{
        root: 'flex-[1]'
      }"
      @submit="submit"
    >
      <div class="max-w-[1035px] w-full mx-auto mt-5 mb-11">
        <BaseSheet
          rounded="2xl"
          shadow="shadow-2"
          :ui="{
            root: 'min-h-[640px] p-8'
          }"
        >
          <div class="flex gap-6">
            <div class="max-w-[430px] w-full">
              <BaseHeading
                :text="`${currentStepMeta.index} / ${Object.keys(stepMeta).length} Loyiha e’lon qilish`"
                weight="medium"
                color="text-(--color-greyscale-500)"
              />

              <BaseHeading
                :text="currentStepMeta.title"
                level="h2"
                weight="semi"
                color="text-(--color-greyscale-900)"
                :ui="{
                  root: 'mt-2 mb-3'
                }"
              />

              <template v-if="typeof currentStepMeta.description === 'string'">
                <BaseHeading
                  :text="currentStepMeta.description"
                  weight="medium"
                  color="text-(--color-greyscale-500)"
                />
              </template>

              <template v-else>
                <BaseHeading
                  :text="currentStepMeta.description.title"
                  level="h8"
                  weight="medium"
                  color="text-(--color-greyscale-900)"
                  :ui="{
                    root: 'mb-2'
                  }"
                />

                <div class="space-y-2">
                  <template
                    v-for="item in currentStepMeta.description.description"
                    :key="item"
                  >
                    <div class="flex gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-(--color-green-500) mt-2" />

                      <BaseHeading
                        :text="item"
                        weight="medium"
                        color="text-(--color-greyscale-600)"
                        :ui="{
                          root: 'flex-[1]'
                        }"
                      />
                    </div>
                  </template>
                </div>
              </template>
            </div>

            <div class="flex-[1]">
              <NuxtPage />
            </div>
          </div>
        </BaseSheet>
      </div>

      <!-- TODO: -->
      <!-- <NavigationFooterStepper /> yaratilgan pastdagi footerni o'rniga -->
      <footer class="bg-white sticky bottom-0">
        <div class="relative">
          <BaseProgress
            v-model="stepProgress"
            size="sm"
            :max="5"
          />

          <div class="max-w-[1035px] w-full mx-auto">
            <div class="flex items-center justify-between h-16">
              <BaseButton
                label="Orqaga"
                icon="solar:alt-arrow-left-outline"
                color="greyscale"
                size="lg"
                :ui="{
                  base: 'cursor-pointer'
                }"
                @click="prevStep"
              />

              <BaseButton
                type="submit"
                label="Davom ettirish"
                icon="solar:alt-arrow-right-outline"
                color="gradient"
                size="lg"
                trailing
                :disabled="!stepperRef?.hasNext"
                :ui="{
                  base: 'cursor-pointer'
                }"
              />
            </div>
          </div>
        </div>
      </footer>
    </BaseForm>
  </div>
</template>
