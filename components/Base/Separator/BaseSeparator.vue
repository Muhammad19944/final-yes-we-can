<script lang="ts">
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'
import type { ColorType, SizeType, BorderTypes, OrientationType } from '~/types/libs'

export interface BaseSeparatorEntity {
  as?: string
  label?: string
  icon?: string
  avatar?: AvatarEntity
  color?: ColorType
  size?: Exclude<SizeType, '3xs' | '2xs' | '2xl' | '3xl'>
  type?: BorderTypes
  orientation?: OrientationType
  decorative?: boolean
  container?: boolean
  ui?: {
    root?: string | string[]
    border?: string | string[]
    container?: string | string[]
    icon?: string | string[]
    avatar?: string | string[]
    avatarSize?: string | string[]
    label?: string | string[]
  }
}
</script>

<script setup lang="ts">
withDefaults(defineProps<BaseSeparatorEntity>(), {
  as: 'div',
  color: 'neutral',
  size: 'xs',
  type: 'solid',
  orientation: 'horizontal'
})
</script>

<template>
  <USeparator
    :as="as"
    :label="label"
    :icon="icon"
    :avatar="avatar"
    :color="color"
    :size="size"
    :type="type"
    :orientation="orientation"
    :decorative="decorative"
    :ui="{
      root: [ui?.root],
      border: ['border-(--color-greyscale-200)', ui?.border],
      container: ['text-sm text-(--color-greyscale-400) mx-6', container ? '' : 'hidden', ui?.container],
      icon: [ui?.icon],
      avatar: [ui?.avatar],
      avatarSize: [ui?.avatarSize],
      label: [ui?.label]
    }"
  >
    <template #default>
      <slot name="default" />
    </template>
  </USeparator>
</template>
