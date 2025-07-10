<script lang="ts">
interface JobDescriptionEntity {
  label?: string
  time?: string
  content?: string
  card?: boolean
}
</script>

<script setup lang="ts">
withDefaults(defineProps<JobDescriptionEntity>(), {
  card: true
})
</script>

<template>
  <BaseSheet
    :card="card"
    :ui="{
      root: 'py-4 px-6'
    }"
  >
    <BaseHeading
      :text="label"
      level="h7"
      weight="semi"
      color="text-(--color-greyscale-900)"
    />

    <BaseHeading
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
    />

    <BaseCollapsible>
      <BaseHeading color="text-(--color-greyscale-600)">
        {{ content }}
      </BaseHeading>
    </BaseCollapsible>
  </BaseSheet>
</template>
