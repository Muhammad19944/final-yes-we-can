<script lang="ts">
import { formatCurrency } from '~/utils'
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'
import type { NavigationItemEntity } from '~/components/Navigation/Project/Meta.vue'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'
import type { ProjectModelResponseEntity, ProjectCustomerFilterEntity } from '~/shared/types/project'
</script>

<script setup lang="ts">
const data = ref<FetchResponseWrapperEntity<ProjectModelResponseEntity>>({
  count: 0,
  next: null,
  previous: null,
  results: []
})
const filters = ref<ProjectCustomerFilterEntity>({
  status: 'draft',
  p: 1
})

const items = ref<TabItemEntity[]>([
  {
    label: 'E’lon qilinmagan',
    value: 'draft'
  },
  {
    label: 'Davom etayotgan',
    value: 'announce_contract'
  },
  {
    label: 'Tugallangan',
    value: 'closed'
  }
])

const navigations = (item: ProjectModelResponseEntity) => {
  const links: NavigationItemEntity[] = [
    {
      label: item.payment_verified ? 'To’lov tasdiqlangan' : 'To’lov tasdiqlanmagan',
      icon: item.payment_verified ? 'solar:check-circle-bold' : 'solar:question-circle-bold',
      ui: {
        label: item.price ? '' : '!text-(--color-greyscale-600)',
        icon: item.payment_verified ? 'text-primary-500' : 'text-(--color-greyscale-400)'
      }
    }
  ]

  links.unshift({
    label: item.price ? `${formatCurrency(Number(item.price))}` : 'Belgilanmagan',
    trailing: item.price ? 'UZS' : '',
    icon: 'solar:dollar-bold',
    ui: {
      label: item.price ? '' : '!text-(--color-greyscale-600)',
      icon: item.price ? 'text-warning-500' : 'text-(--color-greyscale-400)'
    }
  })

  return links
}

watch(
  () => filters.value.status,
  async (value) => {
    if (value) {
      // TODO: status filterni massiv qabul qiladigan qilgandan keyin davom ettiriladi
      // const split = value.split('_')

      const { data: list } = await useFetch(`/api/project/customer`, {
        query: {
          ...filters.value,
          status: value
        }
      })

      if (list.value) {
        data.value = list.value
      }
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="recent-jobs-view">
    <div class="flex items-center justify-between mb-5">
      <BaseHeading
        text="Oxirgi loyihalar"
        level="h4"
        weight="semi"
        color="text-(--color-greyscale-900)"
      />

      <BaseTabs
        v-model="filters.status"
        :items="items"
        color="white"
        size="sm"
        :ui="{
          root: 'w-sm'
        }"
      />
    </div>

    <div class="space-y-3">
      <template v-if="filters.status === 'draft'">
        <template
          v-for="item in data.results"
          :key="item.id"
        >
          <NuxtLinkLocale
            :to="`/project/show/${item.id}/${item.step}/`"
            class="block"
          >
            <CardProjectItem
              :date="item.updated_at"
              :title="item.title"
              :description="item.profession ?? `To'ldirilmagan`"
              :skills="item.technologies"
              :navigations="navigations(item)"
            />
          </NuxtLinkLocale>
        </template>
      </template>

      <template v-else-if="filters.status === 'announce_contract'">
        <!-- <CardProjectItem :navigations="navigations(item)" /> -->
      </template>

      <template v-else>
        <!-- <CardProjectItem :navigations="navigations(item)" /> -->
      </template>
    </div>
  </div>
</template>
