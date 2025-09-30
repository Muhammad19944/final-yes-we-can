<script lang="ts">
import type { ButtonEntity } from '~/components/Base/Button/BaseButton.vue'

interface EditButtonEntity extends ButtonEntity {
  borderable?: boolean
  tooltip?: {
    text?: string
    show?: boolean
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<EditButtonEntity>(), {
  color: 'gradient',
  size: 'sm',
  variant: 'solid',
  icon: 'solar:pen-bold',
  tooltip: () => ({
    text: `O'zgartirish`,
    show: true
  })
})

const defineBorder = computed(() => {
  return `${props.borderable ? 'border-4 border-white' : ''}`
})
</script>

<template>
  <BaseTooltip
    :text="tooltip?.text"
    :delay-duration="400"
  >
    <BaseButton
      rounded
      square
      :color="color"
      :icon="icon"
      :size="size"
      :variant="variant"
      :ui="{
        base: `${defineBorder} ${ui?.base}`,
        label: ui?.label,
        leadingAvatar: ui?.leadingAvatar,
        leadingAvatarSize: ui?.leadingAvatarSize,
        leadingIcon: ui?.leadingIcon,
        trailingIcon: ui?.trailingIcon
      }"
    >
      <template #default>
        <slot />
      </template>
    </BaseButton>
  </BaseTooltip>
</template>

<style scoped></style>
