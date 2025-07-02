<script lang="ts">
import type { BaseBadgeEntity } from '~/components/Base/Badge/BaseBadge.vue'

interface JobSkillsEntity {
  card?: boolean
  skills?: BaseBadgeEntity[]
}
</script>

<script setup lang="ts">
withDefaults(defineProps<JobSkillsEntity>(), {
  card: true
})
</script>

<template>
  <BaseSheet
    :card="card"
    :ui="{
      root: 'py-4 px-6'
    }"
  >
    <BaseHeading
      text="Talab etiladigan qobiliyatlar"
      level="h7"
      weight="semi"
      color="text-(--color-greyscale-900)"
      :ui="{
        root: 'mb-3'
      }"
    />

    <div class="flex flex-wrap gap-2">
      <template
        v-for="skill in skills"
        :key="skill.label"
      >
        <BaseBadge
          :label="skill.label"
          color="greyscale"
          size="lg"
          :ui="{
            base: 'text-(--color-greyscale-700)'
          }"
        />
      </template>
    </div>
  </BaseSheet>
</template>
