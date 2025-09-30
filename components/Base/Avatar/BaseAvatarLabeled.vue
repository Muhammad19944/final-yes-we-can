<script lang="ts">
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'

export interface AvatarLabeledEntity extends AvatarEntity {
  label?: string
  subLabel?: string
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  labelSlot?: object
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  subLabelSlot?: object
  ui?: {
    root?: string | string[]
    avatar?: string | string[]
    content?: string | string[]
    label?: string
    subLabel?: string
  }
}
</script>

<script lang="ts" setup>
withDefaults(defineProps<AvatarLabeledEntity>(), {})
</script>

<template>
  <div
    class="flex items-start gap-3"
    :class="[ui?.root]"
  >
    <div
      class="flex relative"
      :class="[ui?.avatar]"
    >
      <BaseAvatar
        :as="as"
        :src="src"
        :alt="alt"
        :icon="icon"
        :size="size"
        :text="text"
        :custom-size="customSize"
        :background="background"
      />

      <slot name="chip" />
    </div>

    <div
      class="space-y-0.5"
      :class="[ui?.content]"
    >
      <div class="flex items-center gap-2">
        <slot name="label">
          <BaseHeading
            :text="label"
            level="h8"
            weight="semi"
            color="text-greyscale-900"
            :ui="{
              root: ui?.label
            }"
          />
        </slot>

        <slot name="badges" />
      </div>

      <slot name="subLabel">
        <BaseHeading
          :text="subLabel"
          weight="medium"
          color="text-greyscale-900"
          :ui="{
            root: ui?.subLabel
          }"
        />
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
