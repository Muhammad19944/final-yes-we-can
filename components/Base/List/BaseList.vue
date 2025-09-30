<script lang="ts">
import type { HeadingEntity } from '~/components/Base/Heading/BaseHeading.vue'

export interface BaseListEntity {
  title?: HeadingEntity
  description?: HeadingEntity
  ui?: {
    root?: string
  }
}
</script>

<script setup lang="ts">
defineProps<BaseListEntity>()
</script>

<template>
  <div
    class="flex items-end justify-between"
    :class="[ui?.root]"
  >
    <div class="flex-1">
      <slot name="title">
        <BaseHeading
          :level="title?.level"
          :text="title?.text"
          :weight="title?.weight"
          :color="title?.color"
          :ui="{
            root: `mb-0.5 ${title?.ui?.root}`
          }"
        />
      </slot>

      <slot name="description">
        <BaseHeading
          :level="description?.level"
          :text="description?.text"
          :weight="description?.weight"
          :color="description?.color"
          :ui="{
            root: `${description?.ui?.root}`
          }"
        />
      </slot>
    </div>

    <slot name="actions" />
  </div>
</template>
