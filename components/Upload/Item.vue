<script lang="ts">
import { formatFileSize } from '~/utils'

interface UploadItemEntity {
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
const emit = defineEmits(['emit:close'])
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
      <slot name="actions" />

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
