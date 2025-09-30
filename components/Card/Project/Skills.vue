<script lang="ts">
import type { CardProjectSheetEntity } from '~/components/Card/Project/Sheet.vue'
import type { HeadingEntity } from '~/components/Base/Heading/BaseHeading.vue'
import type { OptionEntity } from '~/shared/types/utils'

interface JobSkillsEntity extends CardProjectSheetEntity, Pick<HeadingEntity, 'level'> {
  skills?: OptionEntity[]
}
</script>

<script setup lang="ts">
withDefaults(defineProps<JobSkillsEntity>(), {
  title: 'Talab etiladigan qobiliyatlar',
  card: true
})
</script>

<template>
  <CardProjectSheet
    :card="card"
    :level="level"
    :title="title"
  >
    <TechnologySkills :skills="skills" />

    <template #actions>
      <slot name="actions" />
    </template>
  </CardProjectSheet>
</template>
