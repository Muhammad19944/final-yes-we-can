<script setup lang="ts">
import { useFeatureStore } from '~/stores/Feature'
import type { AccordionItemEntity } from '~/components/Base/Accordion/BaseAccordion.vue'
import type { OptionEntity } from '~/types/utils'

const featureStore = useFeatureStore()

const items = ref<(AccordionItemEntity & { technologies: OptionEntity[] })[]>([])
const selectedTechnologies = ref<OptionEntity[]>([])

const selectTechnology = (value: boolean | string | undefined, technology: OptionEntity, technologyId: number) => {
  if (typeof value === 'boolean' && value) {
    selectedTechnologies.value.push(technology)
  } else {
    selectedTechnologies.value = selectedTechnologies.value.filter((technology) => technology.id !== technologyId)
  }
}

await featureStore.getProfession()
items.value = featureStore.profession
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
          v-for="technology in selectedTechnologies"
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
