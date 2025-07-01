<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div class="base-collapsible-view">
    <div
      class="collapse-view--content h-40 overflow-hidden"
      :class="{ 'h-auto': count & 1 }"
    >
      <slot />
    </div>

    <div class="-mx-1.5">
      <BaseButton
        label="Ko’proq"
        variant="link"
        :icon="count & 1 ? 'solar:alt-arrow-down-linear' : 'solar:alt-arrow-up-linear'"
        trailing
        square
        :ui="{
          base: 'cursor-pointer'
        }"
        @click="count++"
      />
    </div>
  </div>
</template>
