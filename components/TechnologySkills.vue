<script lang="ts">
import type { OptionEntity } from '~/shared/types/utils'

interface TechnologySkillsEntity {
  skills?: OptionEntity[]
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
        :label="skill.name"
        color="greyscale"
        size="2xl"
      />
    </template>
  </div>
</template>
