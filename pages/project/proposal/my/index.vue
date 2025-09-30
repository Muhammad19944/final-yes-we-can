<script lang="ts">
import BaseBadge from '~/components/Base/Badge/BaseBadge.vue'
import BaseHeading from '~/components/Base/Heading/BaseHeading.vue'
import type { TableColumn } from '@nuxt/ui'
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'
import type { ExtendColorsType } from '~/components/Base/Badge/BaseBadge.vue'
import { NuxtLinkLocale } from '#components'

type TabItemValueType = 'active' | 'archive'

interface TabsEntity extends TabItemEntity {
  value?: TabItemValueType
}

interface TableEntity {
  created_date?: string
  project_name?: string
  status?: 'pending' | 'rejected'
}
</script>

<script setup lang="ts">
const tabValue = ref<TabItemValueType>('active')
const tabItems = ref<TabsEntity[]>([
  {
    label: 'Faol takliflar',
    value: 'active'
  },
  {
    label: 'Arxivdagi takliflar',
    value: 'archive'
  }
])
const tableData = ref<TableEntity[]>([
  {
    created_date: '24-may, 2024',
    project_name: 'Kichik biznes uchun WordPress saytini moslashtirish kerak',
    status: 'pending'
  },
  {
    created_date: '24-may, 2024',
    project_name: 'Startap uchun logo dizayni kerak',
    status: 'rejected'
  },
  {
    created_date: '24-may, 2024',
    project_name: 'Ingliz tilidan rus tiliga tarjimon',
    status: 'pending'
  },
  {
    created_date: '24-may, 2024',
    project_name: 'React ilovadagi xatolarni tuzatish va ishlashini tezlashtirish',
    status: 'rejected'
  },
  {
    created_date: '24-may, 2024',
    project_name: 'Oddiy iOS va Android ilova yaratish uchun mobil dasturchi kerak',
    status: 'pending'
  }
])
const tableColumn: TableColumn<TableEntity>[] = [
  {
    accessorKey: 'created_date',
    header: 'Yuborilgan sana',
    cell: ({ row }) =>
      h(BaseHeading, {
        text: row.getValue('created_date') as string,
        weight: 'medium',
        color: 'text-(--color-greyscale-900)'
      })
  },
  {
    accessorKey: 'project_name',
    header: 'Loyiha nomi',
    cell: ({ row }) =>
      h(
        NuxtLinkLocale,
        {
          to: '/',
          class: 'text-(--color-green-500) hover:text-(--color-green-300) underline underline-offset-4'
        },
        () => [
          h(BaseHeading, {
            text: row.getValue('project_name') as string,
            weight: 'medium'
          })
        ]
      )
  },
  {
    accessorKey: 'status',
    header: 'Ishning holati',
    cell: ({ row }) => {
      const color = {
        pending: 'warning',
        rejected: 'error'
      }[row.getValue('status') as string]

      return h(BaseBadge, {
        color: color as ExtendColorsType,
        variant: 'subtle',
        label: color === 'warning' ? 'Kutishda' : 'Rad etildi'
      })
    }
  }
]
</script>

<template>
  <div class="proposal-my-view">
    <div class="max-w-[1035px] mx-auto py-20">
      <BaseHeading
        level="h3"
        text="Mening takliflarim"
        weight="semi"
        color="text-(--color-greyscale-900)"
        :ui="{
          root: '!mb-1.5'
        }"
      />

      <BaseTabs
        v-model="tabValue"
        :items="tabItems"
        :rounded="false"
        variant="link"
        size="md"
        :ui="{
          root: 'mb-3',
          list: 'px-0'
        }"
      />

      <template v-if="tabValue === 'active'">
        <!-- @vue-ignore -->
        <BaseTable
          :data="tableData"
          :columns="tableColumn"
        />
      </template>

      <template v-else>
        <BaseTable :data="[]" />
      </template>
    </div>
  </div>
</template>
