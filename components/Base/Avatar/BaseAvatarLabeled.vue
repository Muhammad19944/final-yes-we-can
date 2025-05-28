<script lang="ts">
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'

export interface AvatarLabeledEntity extends AvatarEntity {
  label?: string
  subLabel?: string
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  labelSlot?: object
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  subLabelSlot?: object
}
</script>

<script lang="ts" setup>
withDefaults(defineProps<AvatarLabeledEntity>(), {})
</script>

<template>
  <div class="flex items-start gap-4">
    <div class="flex relative">
      <BaseAvatar
        :as="as"
        :src="src"
        :alt="alt"
        :icon="icon"
        :size="size"
        :custom-size="customSize || 56"
        :background="background"
      />

      <slot name="chip" />
    </div>

    <div class="space-y-0.5">
      <div class="flex items-center gap-2">
        <slot name="label">
          <BaseHeading
            :text="label"
            level="h7"
            weight="semi"
            color="text-greyscale-900"
          />
        </slot>

        <slot name="badges" />
      </div>

      <slot name="subLabel">
        <BaseHeading
          :text="subLabel"
          weight="medium"
          color="text-greyscale-900"
        />
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
