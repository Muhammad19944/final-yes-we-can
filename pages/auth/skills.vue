<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div class="max-w-[865px] w-full">
    <BaseSheet
      shadow="shadow-2"
      :ui="{
        root: 'py-6 px-8'
      }"
    >
      <BaseHeading
        text="Umumiy"
        level="h4"
        weight="semi"
        color="text-(--color-greyscale-900)"
        :ui="{
          root: 'mb-3'
        }"
      />
    </BaseSheet>
  </div>
</template>
