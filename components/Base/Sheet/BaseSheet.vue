<script lang="ts">
import { useRounded } from '~/composables/useRounded'
import type { SizeType } from '~/types/libs'

export interface BaseSheetEntity {
  card?: boolean
  shadow?: boolean | 'shadow-1' | 'shadow-2'
  rounded?: boolean | SizeType
  ui?: {
    root?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSheetEntity>(), {
  card: true,
  shadow: 'shadow-1',
  rounded: 'xl' as const
})

const defineShadow = computed(() => {
  if (!props.shadow) {
    return ''
  } else if (props.shadow === 'shadow-1') {
    return 'shadow-10'
  } else {
    return 'shadow-20'
  }
})

const defineCard = computed(() => {
  return {
    '!p-0 !shadow-none !bg-transparent': !props.card
  }
})

const { defineRounded } = useRounded(computed(() => props.rounded))
</script>

<template>
  <div
    class="base-sheet-view bg-white"
    :class="[defineCard, defineShadow, defineRounded, ui?.root]"
  >
    <slot />
  </div>
</template>
