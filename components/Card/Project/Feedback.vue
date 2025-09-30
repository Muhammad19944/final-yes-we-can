<script lang="ts">
import type { CardProjectSheetEntity } from '~/components/Card/Project/Sheet.vue'
import type { HeadingEntity } from '~/components/Base/Heading/BaseHeading.vue'

interface CardProjectFeedbackEntity extends CardProjectSheetEntity, Pick<HeadingEntity, 'level'> {
  items?: { title?: string }[]
}
</script>

<script setup lang="ts">
defineProps<CardProjectFeedbackEntity>()
</script>

<template>
  <CardProjectSheet
    :card="card"
    :level="level"
    :title="title"
  >
    <div class="space-y-8">
      <div>
        <BaseHeading
          text="Our company worked with Dilmurod 6 month and fully satisfied with her work. Task was designing CRM system for logistics company and She did excellent job. She is responsible, creative, and did all woks on time, strongly recommend"
          weight="normal"
          color="text-(--color-greyscale-800)"
          :ui="{
            root: 'mb-3'
          }"
        />

        <BaseAvatarLabeled
          size="xl"
          alt="Darlene Robertson"
          label="Darlene Robertson"
          sub-label="Aug 12, 2024"
          :ui="{
            content: '!-space-y-0.5',
            subLabel: '!text-(--color-greyscale-500)'
          }"
        />
      </div>

      <div>
        <BaseHeading
          text="Our company worked with Dilmurod 6 month and fully satisfied with her work."
          weight="normal"
          color="text-(--color-greyscale-800)"
          :ui="{
            root: 'mb-3'
          }"
        />

        <BaseAvatarLabeled
          size="xl"
          alt="Darlene Robertson"
          label="Darlene Robertson"
          sub-label="Aug 12, 2024"
          :ui="{
            content: '!-space-y-0.5',
            subLabel: '!text-(--color-greyscale-500)'
          }"
        />
      </div>
    </div>
  </CardProjectSheet>
</template>
