<script lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { AvatarEntity } from '~/components/Base/Avatar/BaseAvatar.vue'

export interface AvatarLinkEntity extends AvatarEntity {
  to?: RouteLocationRaw
  target?: null | '_blank' | '_parent' | '_self' | '_top' | (string & {})
  underlineOnHover?: boolean
}
</script>

<script setup lang="ts">
defineProps<AvatarLinkEntity>()
</script>

<template>
  <NuxtLinkLocale
    :to="to"
    :target="target"
    :class="[underlineOnHover ? 'hover:underline' : '']"
  >
    <slot name="default">
      <BaseAvatar
        :as="as"
        :src="src"
        :alt="alt"
        :icon="icon"
        :size="size"
        :text="text"
        :custom-size="customSize || 56"
        :background="background"
      />
    </slot>
  </NuxtLinkLocale>
</template>
