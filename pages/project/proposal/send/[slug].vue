<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import type { NavigationItemEntity } from '~/components/Navigation/Project/Meta.vue'
import { useProjectStore } from '~/stores/Projects'
import { PLATFORM_COMMISSION_RATE } from '~/shared/const'
import type { UploadResponseEntity } from '~/composables/useUpload'
import { clearSymbols } from '~/utils'

const schema = z.object({
  job: z.string().optional(),
  price: z.string().optional(),
  duration: z.object({
    label: z.string(),
    value: z.string()
  }),
  cover_letter: z.string({ message: 'Cover letter yozilishi shart' }),
  files: z.array(z.any()).optional(),
  step: z.string().optional()
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
const { $toast } = useNuxtApp()

definePageMeta({
  layout: 'footerless'
})

const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()
const { loading, setLoading } = useLoader()
const { loading: formLoading, setLoading: setFormLoading } = useLoader()
const { sleep } = useTimeout()
const { currentLevel } = useProjectMeta()

const state = reactive<Partial<Schema>>({
  job: undefined,
  price: undefined,
  duration: undefined,
  cover_letter: undefined,
  files: [],
  step: 'submitted'
})
const mockFiles = ref<UploadResponseEntity[]>([])

const defineGeneralItems = computed<NavigationItemEntity[]>(() => {
  return [
    {
      label: formatCurrency(Number(projectStore.projectRequest.price)),
      trailing: 'UZS',
      description: 'Ishbay narx',
      icon: 'solar:dollar-bold',
      ui: {
        icon: 'text-(--color-warning-500)'
      }
    },
    {
      label: currentLevel(projectStore.projectRequest.level)?.label ?? '',
      description: 'Talab etilgan daraja',
      icon: 'solar:bolt-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    },
    {
      label: 'Tasdiqlangan',
      description: 'To’lov holati',
      icon: 'solar:verified-check-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    }
  ]
})

const price = computed({
  get: () => formatCurrency(Number(projectStore.projectRequest.price) || 0),
  set: (val: string) => {
    projectStore.projectRequest.price = val.replace(/\s/g, '')
  }
})

const planformCommissionAmount = computed(() => {
  const price = Number(projectStore.projectRequest.price) || 0
  return Math.round(price * PLATFORM_COMMISSION_RATE)
})

const freelancerReceiveAmount = computed(() => {
  const price = Number(projectStore.projectRequest.price) || 0
  return price - planformCommissionAmount.value
})

setLoading(true)

const getProjectById = async () => {
  try {
    await projectStore.fetchProjectGetById(route.params.slug as string)
  } catch (error) {
    console.error(error)
  } finally {
    await sleep()
    setLoading(false)
  }
}

const sendPropsal = async (event: FormSubmitEvent<Schema>) => {
  setFormLoading(true)

  try {
    const model = {
      ...event.data,
      job: route.params.slug as string,
      price: clearSymbols(price.value),
      duration: '02 10:05:33',
      // duration: event.data.duration?.value,
      files: mockFiles.value.filter((file) => file.id).map((file) => file.id)
    }

    await useClientFetch('/api/account/account/propsal/send', {
      method: 'post',
      body: model
    })

    $toast({
      title: `Ish uchun taklif yuborildi`,
      icon: 'solar:check-circle-outline'
    })
  } catch (error) {
    console.log(error)
  } finally {
    await sleep()
    setFormLoading(false)
  }
  // console.log('event', event.data)
}

const prevStep = () => {
  router.go(-1)
}

onMounted(async () => {
  await getProjectById()
})
</script>

<template>
  <div class="proposal-view flex flex-col min-h-[calc(100vh-64px)]">
    <BaseForm
      :schema="schema"
      :state="state"
      :ui="{
        root: 'flex flex-col flex-1'
      }"
      @submit="sendPropsal"
    >
      <div class="flex flex-col flex-1 max-w-[1035px] w-full mx-auto my-14">
        <template v-if="loading">
          <div class="flex items-center justify-center flex-1">
            <UIcon
              name="svg-spinners:90-ring-with-bg"
              class="w-11 h-11 bg-primary-500"
            />
          </div>
        </template>

        <template v-else>
          <BaseHeading
            level="h3"
            text="Taklif yuborish"
            weight="semi"
            color="text-(--color-greyscale-900)"
            :ui="{
              root: 'mb-4'
            }"
          />

          <BaseSheet
            rounded="2xl"
            shadow="shadow-2"
            :ui="{
              root: 'divide-y divide-(--color-greyscale-200)'
            }"
          >
            <div class="py-6 px-8">
              <CardProjectDescription
                :title="projectStore.projectRequest.title"
                :content="projectStore.projectRequest.profession"
                time="4 soat"
                level="h5"
                :card="false"
              />

              <CardProjectSheet :card="false">
                <NavigationProjectMeta
                  :items="defineGeneralItems"
                  :compact="false"
                  separator="divider"
                  :ui="{
                    root: 'mt-5',
                    separator: 'mx-4'
                  }"
                />
              </CardProjectSheet>
            </div>

            <div class="py-6 px-8">
              <CardProjectSkills
                :skills="projectStore.projectRequest.technologies"
                :card="false"
              />
            </div>

            <div class="py-6 px-8">
              <CardProjectSheet
                title="Byudjet"
                level="h6"
                :card="false"
              >
                <template #description>
                  <BaseHeading
                    text="Bu ish uchun qancha narx taklif qilmoqchisiz?"
                    weight="medium"
                    color="text-(--color-greyscale-900)"
                    :ui="{
                      root: 'mt-3'
                    }"
                  />
                </template>

                <div class="flex items-center">
                  <div class="max-w-[600px] w-full space-y-5">
                    <div class="flex items-center gap-15">
                      <div class="flex-1">
                        <BaseList
                          :title="{
                            level: 'h7',
                            text: 'Taklif',
                            weight: 'medium',
                            color: 'text-(--color-greyscale-900)',
                            ui: {
                              root: '!mb-0'
                            }
                          }"
                          :description="{
                            text: `Sizning taklifingizda mijoz ko'radigan umumiy miqdor`,
                            weight: 'medium',
                            color: 'text-(--color-greyscale-500)'
                          }"
                        />
                      </div>

                      <div class="max-w-[220px] w-full">
                        <BaseFormInput
                          v-model="price"
                          size="2xl"
                        >
                          <template #trailing>
                            <BaseHeading
                              text="UZS"
                              weight="normal"
                              color="text-(--color-greyscale-500)"
                              :ui="{
                                root: 'mr-2'
                              }"
                            />
                          </template>
                        </BaseFormInput>
                      </div>
                    </div>

                    <div class="flex items-center gap-15">
                      <div class="flex-1">
                        <BaseList
                          :title="{
                            level: 'h7',
                            text: 'Komissiya',
                            weight: 'medium',
                            color: 'text-(--color-greyscale-900)',
                            ui: {
                              root: '!mb-0'
                            }
                          }"
                          :description="{
                            text: `${PLATFORM_COMMISSION_RATE * 100}% Platforma xizmati toʻlovi`,
                            weight: 'medium',
                            color: 'text-(--color-greyscale-500)'
                          }"
                        />
                      </div>

                      <div class="max-w-[220px] w-full">
                        <BaseFormInput
                          :value="formatCurrency(planformCommissionAmount)"
                          size="2xl"
                          disabled
                        >
                          <template #trailing>
                            <BaseHeading
                              text="UZS"
                              weight="normal"
                              color="text-(--color-greyscale-500)"
                              :ui="{
                                root: 'mr-2'
                              }"
                            />
                          </template>
                        </BaseFormInput>
                      </div>
                    </div>

                    <div class="flex items-center gap-15">
                      <div class="flex-1">
                        <BaseList
                          :title="{
                            level: 'h7',
                            text: 'Qabul qilasiz',
                            weight: 'medium',
                            color: 'text-(--color-greyscale-900)',
                            ui: {
                              root: '!mb-0'
                            }
                          }"
                          :description="{
                            text: `Xizmat toʻlovlaridan keyin oladigan taxminiy miqdor`,
                            weight: 'medium',
                            color: 'text-(--color-greyscale-500)'
                          }"
                        />
                      </div>

                      <div class="max-w-[220px] w-full">
                        <BaseFormInput
                          :value="formatCurrency(freelancerReceiveAmount)"
                          size="2xl"
                          disabled
                        >
                          <template #trailing>
                            <BaseHeading
                              text="UZS"
                              weight="normal"
                              color="text-(--color-greyscale-500)"
                              :ui="{
                                root: 'mr-2'
                              }"
                            />
                          </template>
                        </BaseFormInput>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-center flex-1">
                    <div class="max-w-[225px] w-full text-center">
                      <UIcon
                        name="solar:dollar-bold-duotone"
                        size="80"
                        class="text-(--color-warning-500)"
                      />

                      <BaseHeading
                        text="Ish uchun belgilangan narxlarni himoya qilishni ta’minlaymiz"
                        weight="medium"
                        color="text-(--color-greyscale-400)"
                        :ui="{
                          root: 'my-1'
                        }"
                      />

                      <BaseButton
                        label="Batafsil"
                        color="primary"
                        size="xl"
                        variant="link"
                      />
                    </div>
                  </div>
                </div>
              </CardProjectSheet>
            </div>

            <div class="py-6 px-8">
              <CardProjectSheet
                title="Muddat"
                level="h6"
                :card="false"
              >
                <BaseFormField
                  label="Bu loyiha qancha vaqt talab qiladi?"
                  required
                  name="duration"
                >
                  <div class="max-w-[325px] w-full">
                    <!-- TODO: items static keyinchalik dynamic qilish kerak -->
                    <BaseFormSelect
                      v-model="state.duration"
                      :items="[
                        { label: '1 hafta', value: '1 hafta' },
                        { label: '2 hafta', value: '2 hafta' },
                        { label: '1 oy', value: '1 oy' },
                        { label: '2 oy', value: '2 oy' },
                        { label: '3 oy', value: '3 oy' }
                      ]"
                      size="2xl"
                      placeholder="Muddatni tanlang"
                      :ui="{
                        base: 'w-full'
                      }"
                    />
                  </div>
                </BaseFormField>
              </CardProjectSheet>
            </div>

            <div class="py-6 px-8">
              <CardProjectSheet
                title="Cover letter"
                level="h6"
                :card="false"
              >
                <BaseFormField
                  label="Taklif matni"
                  required
                  name="cover_letter"
                  :ui="{
                    container: 'mb-5'
                  }"
                >
                  <BaseFormTextarea
                    v-model="state.cover_letter"
                    :rows="7"
                    placeholder="Taklif matnini yozing"
                  />
                </BaseFormField>

                <!-- TODO: Remove item funksionalni tog'irlash kerak -->
                <UploadAttachment
                  v-model="mockFiles"
                  center
                  reverse
                  @emit:remove-item="(index: number) => {
                    mockFiles.splice(index, 1)
                  }"
                  @emit:success-upload="(collection: UploadResponseEntity[]) => mockFiles.push(...collection)"
                />
              </CardProjectSheet>
            </div>

            <div class="py-6 px-8">
              <CardProjectSheet
                title="Profile highlights "
                level="h6"
                :card="false"
              >
                <WidgetProjectHighlights />
              </CardProjectSheet>
            </div>

            <div class="py-6 px-8">
              <CardProjectSheet
                title="Bog’lanishlar "
                level="h6"
                :card="false"
              >
                <AlertConnection show-connection-text />
              </CardProjectSheet>
            </div>
          </BaseSheet>
        </template>
      </div>

      <NavigationFooterStepper
        :prev="{
          text: 'Orqaga'
        }"
        :next="{
          text: 'Yuborish',
          loading: formLoading
        }"
        :ui="{
          content: 'max-w-[1035px]'
        }"
        @emit:prev="prevStep"
      />
    </BaseForm>
  </div>
</template>
