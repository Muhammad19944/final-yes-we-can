<script lang="ts">
import { useProjectStore } from '~/stores/Projects'
</script>

<script setup lang="ts">
const route = useRoute()
const projectStore = useProjectStore()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

definePageMeta({
  layout: 'footerless'
})

onMounted(async () => {
  try {
    setLoading(true)
    await projectStore.fetchProjectGetById(route.params.slug as string)
  } finally {
    await sleep()
    setLoading(false)
  }
})
</script>

<template>
  <div class="project-show-view flex flex-col flex-1">
    <template v-if="loading">
      <div class="flex items-center justify-center flex-1">
        <UIcon
          name="svg-spinners:90-ring-with-bg"
          class="w-10 h-10 bg-primary-500"
        />
      </div>
    </template>

    <template v-else>
      <NavigationProjectWizard type="read" />
    </template>
  </div>
</template>
