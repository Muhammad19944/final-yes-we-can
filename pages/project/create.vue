<script lang="ts">
import { useStorage } from '@vueuse/core'
import { ProjectId } from '~/shared/const'
import { useProjectStore } from '~/stores/Projects'
</script>

<script setup lang="ts">
const projectId = useStorage(ProjectId, '')
const projectStore = useProjectStore()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

definePageMeta({
  layout: 'footerless'
})

onMounted(async () => {
  try {
    setLoading(true)
    if (projectId.value) {
      projectStore.fetchProjectGetById(projectId.value)
    }
  } finally {
    await sleep()
    setLoading(false)
  }
})

if (projectId.value) {
  projectStore.fetchProjectGetById(projectId.value)
}
</script>

<template>
  <div class="project-create-view flex flex-col flex-1">
    <template v-if="loading">
      <div class="flex items-center justify-center flex-1">
        <UIcon
          name="svg-spinners:90-ring-with-bg"
          class="w-10 h-10 bg-primary-500"
        />
      </div>
    </template>

    <template v-else>
      <NavigationProjectWizard />
    </template>
  </div>
</template>
