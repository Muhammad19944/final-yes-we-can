<script lang="ts">
import type { _SelectMenuItem } from '~/components/Base/Form/BaseFormSelect.vue'
</script>

<script setup lang="ts">
import { useProjectStore } from '~/stores/Projects'

interface SelectLanguageEntity extends _SelectMenuItem {
  value: string
}

const items = ref<SelectLanguageEntity[]>([
  {
    label: 'Label 1',
    value: 'value 1'
  },
  {
    label: 'Label 2',
    value: 'value 2'
  },
  {
    label: 'Label 3',
    value: 'value 3'
  }
])

const projectStore = useProjectStore()
</script>

<template>
  <div class="project-technologies-view">
    <BaseFormField
      label="Qobiliyatlarni tanlang"
      name="title"
    >
      <BaseFormInputMenu
        v-model="projectStore.projectRequest.technologies"
        :items="items"
        multiple
        placeholder="Qobiliyatlarni tanlang"
      />
    </BaseFormField>
  </div>
</template>
