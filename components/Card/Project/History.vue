<script lang="ts">
import type { CardProjectSheetEntity } from '~/components/Card/Project/Sheet.vue'
import type { HeadingEntity } from '~/components/Base/Heading/BaseHeading.vue'

interface CardProjectHistoryEntity extends CardProjectSheetEntity, Pick<HeadingEntity, 'level'> {
  items?: { title?: string }[]
}
</script>

<script setup lang="ts">
defineProps<CardProjectHistoryEntity>()
</script>

<template>
  <CardProjectSheet
    :card="card"
    :level="level"
    :title="title"
  >
    <div class="space-y-2">
      <div class="bg-(--color-greyscale-50) rounded-2xl py-4 px-6">
        <BaseList
          :title="{
            level: 'h8',
            text: `Figma UI & UX designer`,
            weight: 'medium',
            color: 'text-(--color-greyscale-900)'
          }"
          :description="{
            text: `Aug 12, 2024 - Oct 22, 2024`,
            weight: 'medium',
            color: 'text-(--color-greyscale-500)'
          }"
          :ui="{
            root: 'items-start'
          }"
        >
          <template #actions>
            <BaseHeading
              text="$175.00"
              weight="semi"
              color="text-(--color-greyscale-900)"
            />
          </template>
        </BaseList>

        <BaseHeading
          level="h8"
          text="“Amazing, prefect design!”"
          weight="medium"
          color="text-(--color-greyscale-600)"
          :ui="{
            root: 'mt-3'
          }"
        />
      </div>
    </div>
  </CardProjectSheet>
</template>
