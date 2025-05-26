<script lang="ts" setup>
import type { AvatarEntity } from '~/types/ui'

withDefaults(defineProps<AvatarEntity>(), {
  as: 'span',
  size: 'md'
})
</script>

<template>
  <u-avatar
    :as="as"
    :src="src"
    :alt="alt"
    :icon="icon"
    :text="text"
  />
</template>

<style lang="scss" scoped></style>
