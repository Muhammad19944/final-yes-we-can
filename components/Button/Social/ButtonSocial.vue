<script lang="ts">
interface ButtonSocialEntity {
  icon: string
  text: string
}
</script>

<script setup lang="ts">
defineProps<ButtonSocialEntity>()
</script>

<template>
  <BaseButton
    size="2xl"
    color="greyscale"
    block
  >
    <template #default>
      <UIcon :name="icon" />

      <BaseHeading
        :text="text"
        weight="medium"
        color="text-[var(--color-greyscale-900)]"
      />
    </template>
  </BaseButton>
</template>
