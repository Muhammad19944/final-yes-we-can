<script lang="ts">
import { formatFileSize } from '~/utils'
import type { MockupsEntity } from '~/composables/useUpload'

interface UploadItemEntity {
  file?: MockupsEntity
  image?: string
  title?: string
  size?: number
  ui?: {
    root: string | string[]
  }
}
</script>

<script setup lang="ts">
defineProps<UploadItemEntity>()
const emit = defineEmits(['emit:close', 'emit:success-upload'])
const { upload, fileToFileList } = useUpload()
const { loading, setLoading } = useLoader()
const { loading: successLoaded, setLoading: setSuccessLoaded } = useLoader()
const { sleep } = useTimeout()

const uploadMock = async (file: MockupsEntity | undefined) => {
  setLoading(true)

  try {
    if (file?.file) {
      const files = fileToFileList([file.file])

      const collection = await upload(files)
      setSuccessLoaded(true)
      setLoading(false)

      emit('emit:success-upload', collection)
    }
  } catch (error) {
    console.log(error)
  } finally {
    await sleep()
    // setLoading(false)
  }
}
</script>

<template>
  <div
    class="upload-item-view flex items-center gap-3 bg-(--color-greyscale-50) rounded-xl p-2 pr-3"
    :class="[ui?.root]"
  >
    <div class="w-10 h-10 rounded-md overflow-hidden">
      <img
        :src="image"
        alt="image"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="flex-1 text-left">
      <slot name="title">
        <BaseHeading
          :text="title"
          weight="medium"
          color="text-(--color-greyscale-900)"
        />
      </slot>

      <slot name="size">
        <BaseHeading
          :text="size ? formatFileSize(size) : ''"
          weight="medium"
          color="text-(--color-greyscale-500)"
          :ui="{
            root: 'text-xs'
          }"
        />
      </slot>
    </div>

    <div class="flex items-center gap-2">
      <BaseTooltip
        :text="successLoaded ? 'Файл загружен' : 'Загрузить файл'"
        :content="{
          side: 'top',
          sideOffset: -2
        }"
      >
        <BaseButton
          size="lg"
          variant="link"
          square
          rounded
          :ui="{
            base: 'cursor-pointer'
          }"
          @click="uploadMock(file)"
        >
          <template #default>
            <template v-if="successLoaded">
              <UIcon
                name="solar:check-circle-bold"
                size="24"
                class="text-green-500 hover:text-green-600"
              />
            </template>

            <template v-else>
              <template v-if="loading">
                <UIcon
                  name="svg-spinners:90-ring-with-bg"
                  size="24"
                  class="text-green-500 hover:text-green-600"
                />
              </template>

              <template v-else>
                <icon
                  name="solar:cloud-upload-outline"
                  size="24"
                  class="text-green-500 hover:text-green-600"
                />
              </template>
            </template>
          </template>
        </BaseButton>
      </BaseTooltip>
      <!-- <slot name="actions" /> -->

      <BaseButton
        size="xs"
        color="greyscale"
        variant="soft"
        icon="heroicons:x-mark-20-solid"
        square
        rounded
        :ui="{
          base: '!bg-(--color-greyscale-200) hover:!bg-(--color-greyscale-300) cursor-pointer'
        }"
        @click="emit('emit:close')"
      />
    </div>
  </div>
</template>
