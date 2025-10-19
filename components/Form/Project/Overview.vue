<script setup lang="ts">
import { useProjectStore } from '~/stores/Projects'
import type { FileType } from '~/composables/useUpload'

const projectStore = useProjectStore()

const files = ref<FileType[]>([])

watch(files, () => {
  console.log('asd', files.value)
})
</script>

<template>
  <div class="project-overview-view">
    <BaseFormField
      label="Tavsif"
      required
      name="profession"
      :ui="{
        container: 'mb-6'
      }"
    >
      <BaseFormTextarea
        v-model="projectStore.projectRequest.profession"
        :rows="7"
        placeholder="Ish tavsifini yozing"
      />
    </BaseFormField>

    <!-- <UploadAttachment v-model="files" /> -->
  </div>
</template>
