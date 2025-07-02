<script lang="ts">
import type { NavigationItemEntity } from '~/components/Navigation/JobMeta/NavigationJobMeta.vue'

interface JobSizeEntity {
  card?: boolean
}
</script>

<script setup lang="ts">
withDefaults(defineProps<JobSizeEntity>(), {
  card: true
})

const items = ref<NavigationItemEntity[]>([
  {
    label: 'Katta',
    description: 'Loyiha hajmi',
    icon: 'solar:calculator-minimalistic-bold',
    ui: {
      icon: 'text-(--color-info-500)'
    }
  },
  {
    label: '1 oydan 3 oygacha',
    description: 'Loyiha muddati',
    icon: 'solar:calendar-bold',
    ui: {
      icon: 'text-(--color-warning-500)'
    }
  },
  {
    label: `Yo'q`,
    description: 'ishga olish imkoniyati',
    icon: 'solar:user-check-rounded-bold',
    ui: {
      icon: 'text-(--color-green-500)'
    }
  }
])
</script>

<template>
  <BaseSheet
    :card="card"
    :ui="{
      root: 'py-4 px-6'
    }"
  >
    <BaseHeading
      text="Loyiha hajmi"
      level="h7"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-3'
      }"
    />

    <div class="-ml-2">
      <NavigationJobMeta
        :items="items"
        :compact="false"
        separator="divider"
        :ui="{
          link: 'pr-12 pl-2'
        }"
      />
    </div>
  </BaseSheet>
</template>
