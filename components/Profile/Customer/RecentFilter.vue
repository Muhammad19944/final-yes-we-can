<script setup lang="ts">
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'
import type { ProjectStatusType } from '~/shared/types/project'

const route = useRoute()
const emit = defineEmits(['emit:change'])

const sorting = ref<TabItemEntity[]>([
  {
    label: 'E’lon qilinmagan',
    value: 'draft'
  },
  {
    label: 'Davom etayotgan',
    value: 'announce'
    // value: 'announce_contract'
  },
  {
    label: 'Tugallangan',
    value: 'closed'
  }
])
const activeTab = ref<ProjectStatusType>('draft')

watch(
  () => activeTab.value,
  (index) => {
    emit('emit:change', index)
  }
)

onMounted(() => {
  if (Object.keys(route.query).length) {
    activeTab.value = route.query.status as ProjectStatusType
  }
})
</script>

<template>
  <BaseTabs
    v-model="activeTab"
    :items="sorting"
    :content="false"
    size="md"
    rounded
    border
    :ui="{
      root: 'w-sm'
    }"
  />
</template>
