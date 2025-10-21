<script lang="ts">
import { useProjectStore } from '~/stores/Projects'
import { useAccountStore } from '~/stores/account'
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'
import type { ProjectModelResponseEntity } from '~/shared/types/project'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'
import { formatCurrency } from '#imports'
</script>

<script setup lang="ts">
const projectStore = useProjectStore()
const accountStore = useAccountStore()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

const items = ref<TabItemEntity[]>([
  {
    label: 'Ochiq',
    value: 'open'
  },
  {
    label: 'Yakunlangan',
    value: 'finished'
  },
  {
    label: 'Jarayonda',
    value: 'inProgress'
  }
])
const tab = ref('open')
const list = ref<FetchResponseWrapperEntity<ProjectModelResponseEntity>>({
  count: 0,
  next: null,
  previous: null,
  results: []
})

const getOwnerProject = async () => {
  setLoading(true)

  try {
    list.value = await useClientFetch(`/api/account/account/owner/${projectStore.projectRequest.owner_id}/jobs`)
  } catch (error) {
    console.error(error)
  } finally {
    await sleep()
    setLoading(false)
  }
}

await getOwnerProject()
</script>

<template>
  <BaseSheet
    :ui="{
      root: 'py-4 px-6'
    }"
  >
    <template v-if="loading">
      <div class="flex items-center justify-center h-96">
        <UIcon
          name="svg-spinners:90-ring-with-bg"
          class="w-10 h-10 bg-primary-500"
        />
      </div>
    </template>

    <template v-else>
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
        v-for="item in list.results"
        :key="item"
      >
        <NuxtLinkLocale
          to="/"
          class="flex items-center gap-6 w-full"
        >
          <div class="flex-1">
            <BaseHeading
              :text="item.title"
              level="h8"
              weight="medium"
              color="text-(--color-greyscale-900)"
              :ui="{
                root: 'line-clamp-1'
              }"
            />

            <BaseHeading
              :text="item.profession"
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
                      :text="accountStore.actionAccountName(accountStore.accountById)"
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
              :text="`${formatCurrency(Number(item.price))} UZS`"
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
    </template>
  </BaseSheet>
</template>
