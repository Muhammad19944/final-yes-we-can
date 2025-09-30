<script lang="ts">
import type { HeadingEntity } from '~/components/Base/Heading/BaseHeading.vue'

export interface CardProjectSheetEntity extends Pick<HeadingEntity, 'level'> {
  card?: boolean
  title?: string
}
</script>

<script setup lang="ts">
withDefaults(defineProps<CardProjectSheetEntity>(), {
  card: true,
  level: 'h7'
})
</script>

<template>
  <BaseSheet
    :card="card"
    :ui="{
      root: 'py-4 px-6'
    }"
  >
    <div class="mb-3">
      <div class="flex items-center justify-between gap-4">
        <BaseHeading
          :level="level"
          :text="title"
          weight="semi"
          color="text-(--color-greyscale-900)"
        />

        <slot name="actions" />
      </div>

      <slot name="description" />
    </div>

    <slot />
  </BaseSheet>
</template>
