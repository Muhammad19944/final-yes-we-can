<script setup lang="ts">
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'

const items = ref<TabItemEntity[]>([
  {
    label: 'Yakunlangan',
    value: 'finished'
  },
  {
    label: 'Jarayonda',
    value: 'inProgress'
  },
  {
    label: 'Ochiq',
    value: 'open'
  }
])
const tab = ref('finished')
</script>

<template>
  <div class="job-detail-view">
    <div class="flex flex-wrap gap-6">
      <div class="flex-1 space-y-2">
        <CardProjectDescription />

        <CardProjectGeneral />

        <CardProjectSize />

        <CardProjectFiles />

        <CardProjectSkills />

        <BaseSheet
          :ui="{
            root: 'py-4 px-6'
          }"
        >
          <div class="flex justify-between mb-1">
            <BaseHeading
              text="Mijozning barcha e'lonlari"
              level="h7"
              weight="semi"
              :ui="{
                root: 'text-(--color-greyscale-900)'
              }"
            />

            <BaseTabs
              v-model="tab"
              :items="items"
              color="white"
              size="sm"
              rounded
              :border="false"
              :ui="{
                root: 'w-2xs'
              }"
            />
          </div>

          <template
            v-for="item in 3"
            :key="item"
          >
            <NuxtLinkLocale
              to="/jobs"
              class="flex items-center gap-6 w-full"
            >
              <div class="flex-1">
                <BaseHeading
                  text="Social media uchun post dizayn"
                  level="h8"
                  weight="medium"
                  color="text-(--color-greyscale-900)"
                  :ui="{
                    root: 'line-clamp-1'
                  }"
                />

                <BaseHeading
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos necessitatibus ipsam soluta cupiditate neque aspernatur sed consequuntur, molestiae ab adipisci nobis commodi quis, optio illum! Ipsa corporis id sed?"
                  weight="medium"
                  color="text-(--color-greyscale-500)"
                  :ui="{
                    root: 'line-clamp-1 mt-0.5 mb-1'
                  }"
                />

                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-1.5">
                    <UIcon
                      name="solar:user-circle-bold"
                      size="20"
                      class="text-(--color-green-500)"
                    />

                    <ClientOnly>
                      <NuxtLinkLocale
                        to="/"
                        class="text-(--color-green-500) underline underline-offset-2"
                      >
                        <BaseHeading
                          text="Cody Fisher"
                          weight="semi"
                        />
                      </NuxtLinkLocale>
                    </ClientOnly>
                  </div>

                  <div class="w-1 h-1 bg-(--color-greyscale-400) rounded-full" />

                  <BaseHeading
                    text="4,9"
                    weight="semi"
                    color="text-(--color-greyscale-900)"
                  />
                </div>
              </div>

              <div class="min-w-[120px] bg-(--color-greyscale-50) rounded-lg text-center py-2 px-3">
                <BaseHeading
                  text="1 200 000 UZS"
                  weight="semi"
                  color="text-(--color-greyscale-900)"
                />

                <BaseHeading
                  text="Belgilangan narx"
                  weight="medium"
                  color="text-(--color-greyscale-500)"
                  :ui="{
                    root: 'text-xs'
                  }"
                />
              </div>
            </NuxtLinkLocale>

            <BaseSeparator
              :ui="{
                root: 'my-3'
              }"
            />
          </template>
        </BaseSheet>

        <BaseSheet
          :ui="{
            root: 'py-4 px-6'
          }"
        >
          <BaseHeading
            text="O’xshash loyihalar"
            level="h7"
            weight="semi"
            :ui="{
              root: 'text-(--color-greyscale-900) mb-3'
            }"
          />

          <template
            v-for="item in 3"
            :key="item"
          >
            <NuxtLinkLocale
              to="/jobs"
              class="block w-full"
            >
              <BaseHeading
                text="Social media uchun post dizayn"
                level="h8"
                weight="medium"
                color="text-(--color-greyscale-900)"
                :ui="{
                  root: 'line-clamp-1'
                }"
              />

              <BaseHeading
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos necessitatibus ipsam soluta cupiditate neque aspernatur sed consequuntur, molestiae ab adipisci nobis commodi quis, optio illum! Ipsa corporis id sed?"
                weight="medium"
                color="text-(--color-greyscale-500)"
                :ui="{
                  root: 'line-clamp-2 mt-0.5 mb-3'
                }"
              />

              <NavigationProjectGeneral
                :compact="true"
                separator="dot"
              />
            </NuxtLinkLocale>

            <BaseSeparator
              :ui="{
                root: 'my-3'
              }"
            />
          </template>
        </BaseSheet>
      </div>

      <div class="max-w-[305px] w-full">
        <div class="sticky top-20">
          <CardProjectCustomerAside />
        </div>
      </div>
    </div>
  </div>
</template>
