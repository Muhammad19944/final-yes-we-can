<script lang="ts">
interface UploadEntity {
  id?: string
  file?: File
  path?: string
  extension?: string
  name?: string
  size?: string
}

interface JobFilesEntity {
  card?: boolean
  files?: UploadEntity[]
}
</script>

<script setup lang="ts">
withDefaults(defineProps<JobFilesEntity>(), {
  card: true
})
</script>

<template>
  <!-- TODO: Refactor: CardProjectSheet komponenta yaratilgan shunga o'tkazish kerak -->
  <BaseSheet
    :card="card"
    :ui="{
      root: 'py-4 px-6'
    }"
  >
    <BaseHeading
      text="Qo’shimcha fayllar"
      level="h7"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-3'
      }"
    />

    <template
      v-for="file in files"
      :key="file.id"
    >
      <div class="flex gap-2">
        <UIcon
          name="solar:paperclip-bold"
          class="text-(--color-greyscale-600)"
        />

        <a
          :href="file.path"
          target="_blank"
          class="inline-block"
        >
          <BaseHeading
            weight="medium"
            color="text-(--color-green-500)"
          />
        </a>
      </div>
    </template>
  </BaseSheet>
</template>
