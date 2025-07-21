<script lang="ts">
import type { FetchResponseWrapperEntity, OptionEntity } from '~/shared/types/utils'
import type { ProfessionModelEntity } from '~/shared/types/profession'
import type { AccordionItemEntity } from '~/components/Base/Accordion/BaseAccordion.vue'

interface ProjectCategoryEntity {
  modelValue?: (number | string)[]
}
</script>

<script setup lang="ts">
defineProps<ProjectCategoryEntity>()

const emit = defineEmits(['update:modelValue'])

const profession = ref<FetchResponseWrapperEntity<ProfessionModelEntity>>({
  count: 0,
  next: null,
  previous: null,
  results: []
})
const selected = ref<OptionEntity[]>([])

profession.value = await useClientFetch('/api/feature/professions', { method: 'get' })

const items = computed<(AccordionItemEntity & { technologies: OptionEntity[] })[]>(() => profession.value.results)

const selectTechnology = (value: boolean | string | undefined, technology: OptionEntity, technologyId: number) => {
  if (typeof value === 'boolean' && value) {
    selected.value.push(technology)
  } else {
    selected.value = selected.value.filter((technology) => technology.id !== technologyId)
  }

  emit(
    'update:modelValue',
    selected.value.map((item) => item.id)
  )
}
</script>

<template>
  <div class="job-category-view">
    <BaseAlert
      title="Mijozlarga qanday asosiy xizmatlarni taklif qilasiz?"
      description="Siz 5 tagacha Qobiliyatlarni tanlashingiz mumkin!"
      decorative-icon="solar:notes-bold-duotone"
      :ui="{ container: 'px-5' }"
    />

    <div class="mt-5 mb-6 space-y-2">
      <BaseHeading text="Siz quyidagilarni tanladingiz:" />

      <div class="flex flex-wrap gap-2">
        <template
          v-for="technology in selected"
          :key="technology.id"
        >
          <BaseBadge
            :label="technology.name"
            color="greyscale"
            :ui="{
              label: 'text-(--color-greyscale-700)'
            }"
          />
        </template>
      </div>
    </div>

    <BaseAccordion
      :items="items"
      :unmount-on-hide="false"
      type="multiple"
      label-key="name"
    >
      <template #body="{ item }">
        <div class="grid grid-cols-3 gap-4">
          <template
            v-for="technology in item.technologies"
            :key="technology.name"
          >
            <BaseFormCheckbox
              :id="technology.name"
              :label="technology.name"
              size="lg"
              :ui="{
                root: 'items-center'
              }"
              @change="(_, model) => selectTechnology(model, technology, technology.id)"
            />
          </template>
        </div>
      </template>
    </BaseAccordion>
  </div>
</template>
