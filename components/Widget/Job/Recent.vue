<script setup lang="ts">
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'

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
const tab = ref('draft')
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
        v-model="tab"
        :items="items"
        color="white"
        size="sm"
        :ui="{
          root: 'w-sm'
        }"
      />
    </div>

    <template v-if="tab === 'draft'">
      <CardJobItem />
    </template>

    <template v-else-if="tab === 'announce_contract'">
      <CardJobItem />
    </template>

    <template v-else>
      <CardJobItem />
    </template>
  </div>
</template>
