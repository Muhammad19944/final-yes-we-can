<script lang="ts">
import type { NavigationItemEntity } from '~/components/Navigation/JobMeta/NavigationJobMeta.vue'

interface JobGeneralEntity {
  card?: boolean
}
</script>

<script setup lang="ts">
withDefaults(defineProps<JobGeneralEntity>(), {
  card: true
})

const item = ref<NavigationItemEntity>({
  label: '10 ta',
  description: 'Takliflar soni',
  icon: 'solar:user-hand-up-bold',
  ui: {
    icon: 'text-(--color-green-500)'
  }
})
</script>

<template>
  <BaseSheet
    :card="card"
    :ui="{
      root: 'py-4 px-6'
    }"
  >
    <BaseHeading
      text="Umumiy"
      level="h7"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-3'
      }"
    />

    <div class="-ml-2">
      <NavigationJobGeneral
        :append="item"
        :ui="{
          link: 'pr-12 pl-2'
        }"
      />
    </div>
  </BaseSheet>
</template>
