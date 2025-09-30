<script lang="ts">
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'

export type HighlightTabTypes = 'project' | 'portfolio' | 'cerificate'

interface TabItemsEntity extends TabItemEntity {
  value: HighlightTabTypes
}

interface HighlightsModalEntity {
  modelValue?: boolean
  tabDefaultValue?: HighlightTabTypes
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<HighlightsModalEntity>(), {
  tabDefaultValue: 'project'
})
const model = useModel(props, 'modelValue')

const currentTab = ref<HighlightTabTypes>('project')
const items = ref<TabItemsEntity[]>([
  {
    label: 'YWC loyihasi',
    value: 'project'
  },
  {
    label: 'Portfolio',
    value: 'portfolio'
  },
  {
    label: 'Sertifikatlar',
    value: 'cerificate'
  }
])
const collection = ref({
  project: [],
  portfolio: []
})

const defineCurrentTabTitle = computed(() => {
  switch (currentTab.value) {
    case 'project':
      return 'YWC loyihalari'
    case 'portfolio':
      return 'Portfolio'
    default: // cerificate
      return 'Sertifikatlar'
  }
})

watch(
  () => props.tabDefaultValue,
  (value) => {
    currentTab.value = value
  }
)
</script>

<template>
  <BaseModal
    v-model:open="model"
    :ui="{
      content: 'max-w-[1080px]'
    }"
  >
    <template #content>
      <div class="divide-y divide-(--color-greyscale-200)">
        <header class="flex items-center justify-between p-5">
          <BaseHeading
            level="h5"
            text="Highlightga ish qo’shish"
            weight="semi"
            color="text-(--color-greyscale-900)"
          />

          <BaseButton
            size="xs"
            color="greyscale"
            square
            rounded
            icon="heroicons:x-mark-20-solid"
            @click="model = false"
          />
        </header>

        <div class="px-5 py-4">
          <BaseTabs
            v-model="currentTab"
            :items="items"
            :default-value="tabDefaultValue"
            :border="false"
            color="white"
            size="sm"
            rounded
            :ui="{
              root: 'w-xs'
            }"
          />
        </div>

        <div class="grid grid-cols-2">
          <div class="border-r border-(--color-greyscale-200)">
            <div class="flex items-center gap-2 px-5 py-4">
              <BaseHeading
                level="h6"
                :text="defineCurrentTabTitle"
                weight="semi"
                color="text-(--color-greyscale-900)"
              />

              <BaseHeading
                level="h6"
                text="(3)"
                weight="semi"
                color="text-(--color-greyscale-600)"
              />
            </div>

            <div class="max-h-[calc(100vh-350px)] overflow-y-auto px-5">
              <div class="divide-y divide-(--color-greyscale-200)">
                <template v-if="currentTab === 'project'">
                  <template
                    v-for="item in 8"
                    :key="item"
                  >
                    <label
                      :for="`project-item-${item}`"
                      class="block cursor-pointer py-4"
                    >
                      <BaseList
                        :title="{
                          level: 'h7',
                          text: 'Figma UI & UX designer',
                          weight: 'semi',
                          color: 'text-(--color-greyscale-900)',
                          ui: {
                            root: '!mb-1'
                          }
                        }"
                        :description="{
                          text: 'Aug 12, 2024 - Oct 22, 2024',
                          weight: 'medium',
                          color: 'text-(--color-greyscale-500)'
                        }"
                        :ui="{
                          root: '!items-center'
                        }"
                      >
                        <template #actions>
                          <input
                            :id="`project-item-${item}`"
                            v-model="collection.project"
                            :value="item"
                            type="checkbox"
                            name="project"
                            hidden
                          />
                        </template>
                      </BaseList>

                      <BaseHeading
                        level="h8"
                        text="“Amazing, prefect design!”"
                        weight="medium"
                        color="text-(--color-greyscale-600)"
                        :ui="{
                          root: 'mt-2.5'
                        }"
                      />
                    </label>
                  </template>
                </template>

                <template v-else-if="currentTab === 'portfolio'">
                  <template
                    v-for="item in 2"
                    :key="item"
                  >
                    <label
                      :for="`portfolio-item-${item}`"
                      class="block cursor-pointer py-4"
                    >
                      <div class="flex items-center gap-3">
                        <div class="w-[88px] h-[72px] rounded-xl overflow-hidden">
                          <img
                            src="/image/logo.svg"
                            alt="Portfolio image"
                            class="w-full h-full object-cover"
                          />
                        </div>

                        <div class="flex-1">
                          <BaseList
                            :title="{
                              text: 'Portfoilo',
                              weight: 'medium',
                              color: 'text-(--color-greyscale-500)'
                            }"
                            :description="{
                              level: 'h7',
                              text: 'Movier - Media Dashboard Design',
                              weight: 'semi',
                              color: 'text-(--color-greyscale-900)'
                            }"
                          >
                            <template #actions>
                              <input
                                :id="`portfolio-item-${item}`"
                                v-model="collection.portfolio"
                                :value="item"
                                type="checkbox"
                                name="portfolio"
                                hidden
                              />
                            </template>
                          </BaseList>
                        </div>
                      </div>
                    </label>
                  </template>
                </template>

                <template v-else>
                  <div class="flex flex-col items-center justify-center h-[calc(100vh-350px)]">
                    <UIcon
                      name="solar:diploma-verified-bold-duotone"
                      size="80"
                      class="bg-linear-(--primary-linear) mb-2"
                    />

                    <BaseHeading
                      level="h7"
                      text="Sizda sertifikatlar yo’q!"
                      weight="medium"
                      color="text-(--color-greyscale-900)"
                    />

                    <NuxtLinkLocale to="/">
                      <BaseButton
                        size="xl"
                        variant="link"
                        label="Sertifikat qo'shish"
                        rounded
                      />
                    </NuxtLinkLocale>
                  </div>
                </template>
              </div>
            </div>
          </div>

          <div>
            <div class="flex items-center gap-2 px-5 py-4">
              <BaseHeading
                level="h6"
                text="Highlightlar"
                weight="semi"
                color="text-(--color-greyscale-900)"
              />

              <BaseHeading
                level="h6"
                text="(3)"
                weight="semi"
                color="text-(--color-greyscale-600)"
              />
            </div>

            <div class="max-h-[calc(100vh-350px)] overflow-y-auto px-5">
              <div class="space-y-2 pb-5">
                <template
                  v-for="item in 5"
                  :key="item"
                >
                  <div class="bg-(--color-greyscale-50) rounded-2xl py-4 pl-6 pr-5">
                    <BaseList
                      :title="{
                        level: 'h7',
                        text: 'Figma UI & UX designer',
                        weight: 'semi',
                        color: 'text-(--color-greyscale-900)',
                        ui: {
                          root: '!mb-1'
                        }
                      }"
                      :description="{
                        text: 'Aug 12, 2024 - Oct 22, 2024',
                        weight: 'medium',
                        color: 'text-(--color-greyscale-500)'
                      }"
                      :ui="{
                        root: '!items-center'
                      }"
                    >
                      <template #actions>
                        <BaseButton
                          size="xl"
                          color="error"
                          variant="link"
                          icon="solar:trash-bin-minimalistic-bold"
                          square
                          rounded
                        />
                      </template>
                    </BaseList>

                    <BaseHeading
                      level="h8"
                      text="“Amazing, prefect design!”"
                      weight="medium"
                      color="text-(--color-greyscale-600)"
                      :ui="{
                        root: 'mt-2.5'
                      }"
                    />
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <footer class="px-5 py-4">
          <div class="flex justify-end gap-3">
            <BaseButton
              label="Bekor qilish"
              color="greyscale"
              size="lg"
            />

            <BaseButton
              type="submit"
              label="Qo’shish"
              color="gradient"
              size="lg"
              trailing
            />
          </div>
        </footer>
      </div>
    </template>
  </BaseModal>
</template>
