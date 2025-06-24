<script lang="ts">
import { useRounded } from '~/composables/useRounded'
import type { SizeType } from '~/types/utils'

export interface BaseSheetEntity {
  shadow?: boolean | 'shadow-1' | 'shadow-2'
  rounded?: boolean | SizeType
  ui?: {
    root?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSheetEntity>(), {
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

const { defineRounded } = useRounded(computed(() => props.rounded))
</script>

<template>
  <div
    class="base-sheet-view bg-white"
    :class="[defineShadow, defineRounded, ui?.root]"
  >
    <slot />
  </div>
</template>
