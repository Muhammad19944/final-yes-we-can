<script lang="ts">
import type { CardProjectSheetEntity } from '~/components/Card/Project/Sheet.vue'
import type { HeadingEntity } from '~/components/Base/Heading/BaseHeading.vue'

interface CardProjectExperienceEntity extends CardProjectSheetEntity, Pick<HeadingEntity, 'level'> {
  items?: { title?: string }[]
}
</script>

<script setup lang="ts">
defineProps<CardProjectExperienceEntity>()
</script>

<template>
  <CardProjectSheet
    :card="card"
    :level="level"
    :title="title"
  >
    <template #actions>
      <slot name="actions" />
    </template>

    <div class="space-y-4">
      <BaseList
        :title="{
          level: 'h8',
          text: 'Product Designer | BB Group LLC',
          weight: 'semi',
          color: 'text-(--color-greyscale-900)'
        }"
        :description="{
          text: 'Iyul, 2023 - Dekabr, 2024',
          weight: 'medium',
          color: 'text-(--color-greyscale-500)'
        }"
      />

      <BaseList
        :title="{
          level: 'h8',
          text: 'UX/UI Designer | JP Morgan Bank',
          weight: 'semi',
          color: 'text-(--color-greyscale-900)'
        }"
        :description="{
          text: 'Yanvar, 2021 - Iyul, 2023',
          weight: 'medium',
          color: 'text-(--color-greyscale-500)'
        }"
      />
    </div>
  </CardProjectSheet>
</template>
