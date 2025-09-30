<script setup lang="ts">
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'

const route = useRoute()
const router = useRouter()

const items = ref<TabItemEntity[]>([
  {
    label: 'Eng oxirgilar',
    value: 'latest'
  },
  {
    label: 'Saqlanganlar',
    value: 'saved'
  },
  {
    label: 'Eng yaxshilar',
    value: 'bast'
  }
])
const tab = ref('latest')
const drawer = ref(false)

const toggleDrawer = async (id: number) => {
  // Перед открытием дровера
  if (!drawer.value) {
    await router.push({ path: route.fullPath, query: { id } })
  } else {
    router.push({ path: route.fullPath, query: undefined })
  }

  drawer.value = !drawer.value
}
/**
 * Открыть дровер автоматический,
 * если id присутствует в урл браузера
 */
const openDrawer = () => {
  const id = route.query.id as string

  if (id) {
    drawer.value = true
  }
}
onMounted(async () => {
  openDrawer()
})
</script>

<template>
  <div class="recent-jobs-view">
    <div class="flex items-center justify-between mb-6">
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

    <div class="space-y-3">
      <template
        v-for="item in 5"
        :key="item"
      >
        <CardProjectItem
          :navigations="[]"
          @click="toggleDrawer(item)"
        />
      </template>
    </div>

    <ProjectDrawer v-model="drawer" />
  </div>
</template>
