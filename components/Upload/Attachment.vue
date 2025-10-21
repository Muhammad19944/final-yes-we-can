<script lang="ts">
import { useUpload } from '~/composables/useUpload'
import type { UploadResponseEntity } from '~/composables/useUpload'
import type { BaseUploadEntity } from '~/components/Base/Upload/BaseUpload.vue'

interface AttachmentEntity extends BaseUploadEntity {
  reverse?: boolean
  center?: boolean
  ui?: {
    root?: string | string[]
    container?: string | string[]
    list?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = defineProps<AttachmentEntity>()
const emit = defineEmits(['update:modelValue', 'emit:success-upload', 'emit:remove-item'])
const model = useModel(props, 'modelValue')
const { isUploadFile } = useUpload()

const removeItem = (index: number) => {
  if (!model.value) return

  model?.value.splice(index, 1)
  emit('emit:remove-item', index)
}
</script>

<template>
  <div class="upload-view">
    <div
      class="flex flex-col"
      :class="[{ 'items-center text-center': center }]"
    >
      <BaseHeading
        text="Fayl biriktirish"
        weight="medium"
        color="text-(--color-greyscale-900)"
        :ui="{
          root: '!text-[15px] mb-1'
        }"
      />

      <BaseHeading
        text="PNG, JPG, PDF fayllar va linklar qo’llab-quvvatlanadi, Maksimal fayl hajmi 50 MB gacha bo’lishi mumkin"
        weight="medium"
        color="text-(--color-greyscale-500)"
      />

      <div :class="['mt-4', ui?.container]">
        <BaseUpload
          v-model="model"
          :multiple="true"
          :load-auto="false"
          :ui="{
            root: `inline-flex items-center gap-1 bg-(--color-greyscale-100) hover:bg-(--color-greyscale-200) h-8 rounded-lg cursor-pointer pl-2 pr-3 ${ui?.root}`
          }"
        >
          <template #label>
            <UIcon name="heroicons:plus-16-solid" />

            <BaseHeading
              text="Fayl qo'shish"
              weight="medium"
              color="text-(--color-greyscale-900)"
            />
          </template>
        </BaseUpload>
      </div>

      <template v-if="model?.length">
        <div
          class="w-full"
          :class="[reverse ? '-order-1 mb-5' : 'mt-4', 'space-y-2', ui?.list]"
        >
          <template
            v-for="(file, index) in model"
            :key="index"
          >
            <template v-if="isUploadFile(file)">
              <!-- <pre>{{ file }}</pre> -->
            </template>

            <template v-else>
              <UploadItem
                :file="file"
                :image="file.path"
                :title="file.file?.name"
                :size="file.file?.size"
                @emit:close="() => removeItem(index)"
                @emit:success-upload="(collection: UploadResponseEntity[]) => emit('emit:success-upload', collection)"
              />
            </template>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
