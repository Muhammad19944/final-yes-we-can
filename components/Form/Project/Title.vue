<script setup lang="ts">
import { useProjectStore } from '~/stores/Projects'

const projectStore = useProjectStore()
</script>

<template>
  <div class="project-title-view">
    <BaseFormField
      label="E’lon qilmoqchi bo’lgan ishingiz nomi"
      name="title"
    >
      <BaseFormTextarea
        v-model="projectStore.projectRequest.title"
        :rows="7"
        placeholder="Nomni kiriting"
      />
    </BaseFormField>

    <BaseHeading
      text="Loyiha nomlariga misollar:"
      weight="medium"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mt-4 mb-2'
      }"
    />

    <div class="space-y-2">
      <div class="flex gap-2">
        <div class="w-1.5 h-1.5 rounded-full bg-(--color-green-500) mt-2" />

        <BaseHeading
          text="Website uchun Framer ekspert zarur"
          weight="medium"
          color="text-(--color-greyscale-600)"
        />
      </div>

      <div class="flex gap-2">
        <div class="w-1.5 h-1.5 rounded-full bg-(--color-green-500) mt-2" />

        <BaseHeading
          text="Portfolio sayt uchun UI (Figma) dizayer kerak!"
          weight="medium"
          color="text-(--color-greyscale-600)"
        />
      </div>

      <div class="flex gap-2">
        <div class="w-1.5 h-1.5 rounded-full bg-(--color-green-500) mt-2" />

        <BaseHeading
          text="Loyihani backend qismiga developer izlayapmiz"
          weight="medium"
          color="text-(--color-greyscale-600)"
        />
      </div>

      <div class="flex gap-2">
        <div class="w-1.5 h-1.5 rounded-full bg-(--color-green-500) mt-2" />

        <BaseHeading
          text="Game dizayn uchun dizayner kerak"
          weight="medium"
          color="text-(--color-greyscale-600)"
        />
      </div>
    </div>
  </div>
</template>
