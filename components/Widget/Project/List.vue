<script setup lang="ts">
import type { TabItemEntity } from '~/components/Base/Tabs/BaseTabs.vue'
import type { ProjectModelResponseEntity } from '~/shared/types/project'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'

const route = useRoute()
const router = useRouter()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

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
const data = ref<FetchResponseWrapperEntity<ProjectModelResponseEntity>>({
  count: 0,
  next: null,
  previous: null,
  results: []
})

const toggleDrawer = async (id: string) => {
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

const loadProject = async () => {
  setLoading(true)

  try {
    const { data: list } = await useFetch(`/api/project/list`)

    if (list.value) {
      data.value = list.value
    }
  } catch (error) {
    console.error(error)
  } finally {
    await sleep()
    setLoading(false)
  }
}

await loadProject()

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

    <template v-if="loading">
      <div class="flex items-center justify-center h-56">
        <UIcon
          name="svg-spinners:90-ring-with-bg"
          class="w-11 h-11 bg-primary-500"
        />
      </div>
    </template>

    <template v-else>
      <div class="space-y-3">
        <template
          v-for="item in data.results"
          :key="item.id"
        >
          <CardProjectItem
            :date="item.updated_at"
            :title="item.title"
            :description="item.profession ?? `To'ldirilmagan`"
            :skills="item.technologies"
            :navigations="[]"
            @click="toggleDrawer(item.id)"
          />
        </template>
      </div>
    </template>

    <ProjectDrawer v-model="drawer" />
  </div>
</template>
