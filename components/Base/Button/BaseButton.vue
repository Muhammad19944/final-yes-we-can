<script lang="ts">
import type { ColorType, VariantType, SizeType } from '~/types/utils'
import type { AvatarEntity } from '../Avatar/BaseAvatar.vue'

export interface ButtonEntity {
  as?: string
  label?: string
  color?: ColorType
  activeColor?: ColorType
  variant?: VariantType
  activeVariant?: VariantType
  size?: Exclude<SizeType, '3xs' | '2xs' | '2xl' | '3xl'>
  square?: boolean
  block?: boolean
  loadingAuto?: boolean
  icon?: string
  avatar?: AvatarEntity
  leading?: boolean
  leadingIcon?: string
  trailing?: boolean
  trailingIcon?: string
  loading?: boolean
  loadingIcon?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  active?: boolean
  target?: null | '_blank' | '_parent' | '_self' | '_top' | (string & {})
}
</script>

<script setup lang="ts">
withDefaults(defineProps<ButtonEntity>(), {
  as: 'button',
  color: 'primary',
  variant: 'solid',
  size: 'md',
  type: 'button'
})
</script>

<template>
  <UButton
    :as="as"
    :label="label"
    :color="color"
    :active-color="activeColor"
    :variant="variant"
    :active-variant="activeVariant"
    :size="size"
    :square="square"
    :block="block"
    :loading-auto="loadingAuto"
    :icon="icon"
    :avatar="avatar"
    :leading="leading"
    :leading-icon="leadingIcon"
    :trailing="trailing"
    :trailing-icon="trailingIcon"
    :loading="loading"
    :loading-icon="loadingIcon"
    :type="type"
    :disabled="disabled"
    :active="active"
    :target="target"
  >
    <template #default>
      <slot name="default" />
    </template>
  </UButton>
</template>
