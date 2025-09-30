<script lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import type { NavigationItemEntity } from '~/components/Navigation/Project/Meta.vue'

const schema = z.object({
  cover_letter: z.string({ message: 'Cover letter yozilishi shart' })
})

type Schema = z.output<typeof schema>
</script>

<script setup lang="ts">
definePageMeta({
  layout: 'footerless'
})

const state = reactive<Partial<Schema>>({
  cover_letter: undefined
})

const defineMetaItems = computed<NavigationItemEntity[]>(() => {
  return [
    {
      label: '9 000 000',
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
      label: 'O’rta daraja (Middle)',
      description: 'Talab etilgan daraja',
      icon: 'solar:bolt-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    }
  ]
})

const submit = (event: FormSubmitEvent<Schema>) => {
  console.log('event', event.data)
}

const prevStep = () => {}
</script>

<template>
  <div class="proposal-view flex flex-col min-h-[calc(100vh-64px)]">
    <BaseForm
      :schema="schema"
      :state="state"
      :ui="{
        root: 'flex-[1]'
      }"
      @submit="submit"
    >
      <div class="max-w-[1035px] w-full mx-auto my-14">
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
              title="Figmada dashboard dizayn chizish"
              time="Loyiha sarlavhasi"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem ex, ipsum autem odio velit dicta, quis provident repellendus quo aperiam officiis facere, sint inventore? Quia amet blanditiis suscipit perferendis."
              :card="false"
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
              :skills="[
                { id: 1, name: 'Web Design' },
                { id: 2, name: 'User Interface Design' },
                { id: 3, name: 'UX & UI' },
                { id: 4, name: 'UX Research' }
              ]"
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

          <div class="py-6 px-8">
            <CardProjectSheet
              title="Muddat"
              level="h6"
              :card="false"
            >
              <BaseFormField label="Bu loyiha qancha vaqt talab qiladi?">
                <div class="max-w-[325px] w-full">
                  <BaseFormSelect
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

              <UploadAttachment
                center
                reverse
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
      </div>

      <NavigationFooterStepper
        :prev="{
          text: 'Orqaga'
        }"
        :next="{
          text: 'Yuborish'
        }"
        :ui="{
          content: 'max-w-[1035px]'
        }"
        @emit:prev="prevStep"
      />
    </BaseForm>
  </div>
</template>
