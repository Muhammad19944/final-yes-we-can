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
      <template v-if="time">
        <BaseHeading
          :text="`${time} oldin e'lon qilingan`"
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
      </template>

      <slot name="description" />
    </template>

    <BaseCollapsible>
      <BaseHeading color="text-(--color-greyscale-600)">
        {{ content }}
      </BaseHeading>
    </BaseCollapsible>
  </CardProjectSheet>
</template>
