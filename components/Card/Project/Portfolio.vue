<script lang="ts">
import type { CardProjectSheetEntity } from '~/components/Card/Project/Sheet.vue'
import type { HeadingEntity } from '~/components/Base/Heading/BaseHeading.vue'

interface CardProjectPortfolioEntity extends CardProjectSheetEntity, Pick<HeadingEntity, 'level'> {
  items?: { title?: string }[]
}
</script>

<script setup lang="ts">
defineProps<CardProjectPortfolioEntity>()
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

    <div class="grid grid-cols-3 gap-6 mt-5">
      <div class="group space-y-3">
        <div class="aspect-[3/2] rounded-2xl border border-greyscale-200" />

        <BaseHeading
          text="Weather Mobile app"
          weight="semi"
          :ui="{
            root: 'group-hover:text-green-500'
          }"
        />
      </div>

      <div class="group space-y-3">
        <div class="aspect-[3/2] rounded-2xl border border-greyscale-200" />

        <BaseHeading
          text="Insect Scanner Mobile app"
          weight="semi"
          :ui="{
            root: 'group-hover:text-green-500'
          }"
        />
      </div>

      <div class="group space-y-3">
        <div class="aspect-[3/2] rounded-2xl border border-greyscale-200" />

        <BaseHeading
          text="News Web app"
          weight="semi"
          :ui="{
            root: 'group-hover:text-green-500'
          }"
        />
      </div>
    </div>
  </CardProjectSheet>
</template>
