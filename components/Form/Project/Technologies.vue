<script setup lang="ts">
import { useProjectStore } from '~/stores/Projects'

const projectStore = useProjectStore()
</script>

<template>
  <div class="project-technologies-view">
    <BaseFormField
      label="Qobiliyatlarni tanlang"
      name="technologies"
    >
      <SelectTechnology v-model="projectStore.projectRequest.technologies" />
    </BaseFormField>
  </div>
</template>
