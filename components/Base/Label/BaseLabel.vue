<script lang="ts">
export interface LabelEntity {
  visible?: boolean
  text?: string
}
</script>

<script setup lang="ts">
withDefaults(defineProps<LabelEntity>(), {
  visible: true
})
</script>

<template>
  <BaseHeading
    v-if="visible"
    :text="text"
    level="h8"
    color="text-greyscale-900"
  />
</template>
