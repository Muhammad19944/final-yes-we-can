<script lang="ts">
import type { SizeType } from '~/types/ui/utils'

export interface AvatarEntity {
  as?: string
  src?: string
  alt?: string
  icon?: string
  text?: string
  size?: SizeType
  customSize?: number
  background?: 'white' | 'gradient'
}
</script>

<script lang="ts" setup>
const props = withDefaults(defineProps<AvatarEntity>(), {
  as: 'span',
  size: 'md'
})
const backgroundWhite = computed(() => {
  return props.background === 'white' ? 'bg-white' : ''
})
const backgroundGradient = computed(() => {
  return props.background === 'gradient' ? 'bg-linear-[var(--primary-linear)]' : ''
})
const textGradient = computed(() => {
  return props.background === 'white' ? 'text-green-500' : ''
})
const textWhite = computed(() => {
  return props.background === 'gradient' ? 'text-white' : ''
})
</script>

<template>
  <u-avatar
    :as="as"
    :src="src"
    :alt="alt"
    :icon="icon"
    :text="text"
    :size="size"
    :style="{
      width: customSize ? `${customSize}px` : undefined,
      height: customSize ? `${customSize}px` : undefined,
      fontSize: customSize ? `${customSize / 2}px` : undefined
    }"
    :ui="{
      root: [backgroundWhite, backgroundGradient],
      icon: ['w-1/2 h-1/2', textGradient, textWhite],
      fallback: [textGradient, textWhite]
    }"
  />
</template>

<style lang="scss" scoped></style>
