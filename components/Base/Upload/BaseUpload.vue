<script lang="ts">
import { useUpload } from '~/composables/useUpload'
import type { FileType } from '~/composables/useUpload'

export interface BaseUploadEntity {
  modelValue?: FileType[]
  multiple?: boolean
  loadAuto?: boolean
  ui?: {
    root?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = defineProps<BaseUploadEntity>()
const model = useModel(props, 'modelValue')
const { upload, mockup } = useUpload()

const handleChange = async (event: Event) => {
  const files = (event.target as HTMLInputElement).files

  if (!files) return

  model.value = props.loadAuto ? await upload(files) : await mockup(files)
}
</script>

<template>
  <label
    for="upload-file"
    :class="ui?.root"
  >
    <slot name="label" />
  </label>

  <input
    id="upload-file"
    type="file"
    hidden
    :multiple="multiple"
    @change="handleChange"
  />
</template>
