<script lang="ts">
import type { BaseBadgeEntity } from '~/components/Base/Badge/BaseBadge.vue'

interface TechnologySkillsEntity {
  skills?: BaseBadgeEntity[]
}
</script>

<script setup lang="ts">
defineProps<TechnologySkillsEntity>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <template
      v-for="skill in skills"
      :key="skill.label"
    >
      <BaseBadge
        :label="skill.label"
        color="greyscale"
        size="lg"
      />
    </template>
  </div>
</template>
