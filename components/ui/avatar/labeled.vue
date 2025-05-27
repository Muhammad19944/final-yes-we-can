<script lang="ts">
import type { AvatarEntity } from '~/components/ui/avatar/index.vue'

export interface AvatarLabeledEntity extends AvatarEntity {
  label?: string
  subLabel?: string
}
</script>

<script lang="ts" setup>
withDefaults(defineProps<AvatarLabeledEntity>(), {
  customSize: 56
})
</script>

<template>
  <div class="flex items-start gap-4">
    <ui-avatar
      :as="as"
      :src="src"
      :alt="alt"
      :icon="icon"
      :size="size"
      :custom-size="customSize"
      :background="background"
    />

    <div class="space-y-0.5">
      <div class="flex items-center gap-2">
        <h1 class="text-lg font-semibold text-greyscale-900">{{ label }}</h1>

        <slot name="badges" />
      </div>

      <h2 class="text-sm font-medium text-greyscale-900">{{ subLabel }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
