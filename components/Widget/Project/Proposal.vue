<script lang="ts">
import { useProjectMeta, formatCurrency } from '#imports'
import type { UploadResponseEntity } from '#imports'
import type { ProjectModelResponseEntity } from '~/shared/types/project'
import type { NavigationItemEntity } from '~/components/Navigation/Project/Meta.vue'

interface WidgetProposalEntity {
  label?: string
  title?: ProjectModelResponseEntity['title']
  profession?: ProjectModelResponseEntity['profession']
  price?: ProjectModelResponseEntity['price']
  level?: ProjectModelResponseEntity['level']
  technologies?: ProjectModelResponseEntity['technologies']
  freelancePrice?: string
  freelanceDuration?: ProjectModelResponseEntity['duration']
  coverLetter?: string
  files?: UploadResponseEntity[]
  highlights?: string[]
}
</script>

<script setup lang="ts">
const { currentLevel } = useProjectMeta()

const props = withDefaults(defineProps<WidgetProposalEntity>(), {
  label: 'Taklif yuborish',
  price: '',
  level: 'junior'
})

const freelancePrice = useModel(props, 'freelancePrice')

const priceTest = computed({
  get: () => formatCurrency(Number(freelancePrice.value) || 0),
  set: (val: string) => {
    freelancePrice.value = val.replace(/\s/g, '')
  }
})

const defineMetaItems = computed<NavigationItemEntity[]>(() => {
  return [
    {
      label: formatCurrency(Number(props.price)),
      trailing: 'UZS',
      description: 'Ishbay narx',
      icon: 'solar:dollar-bold',
      ui: {
        icon: 'text-(--color-warning-500)'
      }
    },
    {
      label: 'Tasdiqlangan',
      description: 'To’lov holati',
      icon: 'solar:verified-check-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    },
    {
      label: currentLevel(props.level)?.label ?? '',
      description: 'Talab etilgan daraja',
      icon: 'solar:bolt-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    }
  ]
})
</script>

<template>
  <BaseHeading
    level="h3"
    :text="label"
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
        :title="title"
        :content="profession"
        :card="false"
        time="Loyiha sarlavhasi"
      />

      <NavigationProjectMeta
        :items="defineMetaItems"
        :compact="false"
        separator="divider"
        :ui="{
          root: 'mt-5',
          separator: 'mx-4'
        }"
      />
    </div>

    <div class="py-6 px-8">
      <CardProjectSkills
        :card="false"
        level="h6"
        :skills="technologies"
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
                  v-model="priceTest"
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
                    text: `10% Freelancer xizmati toʻlovi`,
                    weight: 'medium',
                    color: 'text-(--color-greyscale-500)'
                  }"
                />
              </div>

              <div class="max-w-[220px] w-full">
                <BaseFormInput
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
                <BaseFormInput size="2xl">
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
  </BaseSheet>
</template>
