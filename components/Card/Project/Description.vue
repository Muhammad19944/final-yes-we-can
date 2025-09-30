<script lang="ts">
import type { CardProjectSheetEntity } from '~/components/Card/Project/Sheet.vue'
import type { HeadingEntity } from '~/components/Base/Heading/BaseHeading.vue'

interface JobDescriptionEntity extends CardProjectSheetEntity, Pick<HeadingEntity, 'level'> {
  time?: string
  content?: string
}
</script>

<script setup lang="ts">
withDefaults(defineProps<JobDescriptionEntity>(), {
  card: true
})
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

    <template #description>
      <slot name="description" />
      <!-- <BaseHeading
        :text="time"
        weight="medium"
        color="text-(--color-greyscale-500)"
        :ui="{
          root: 'mt-0.5'
        }"
      />

      <BaseSeparator
        :ui="{
          root: 'my-2'
        }"
      />

      <BaseHeading
        text="Tavsif"
        level="h8"
        weight="semi"
        color="text-(--color-greyscale-900)"
        :ui="{
          root: 'mb-1'
        }"
      /> -->
    </template>

    <BaseCollapsible>
      <BaseHeading color="text-(--color-greyscale-600)">
        {{ content }}
      </BaseHeading>
    </BaseCollapsible>
  </CardProjectSheet>
</template>
