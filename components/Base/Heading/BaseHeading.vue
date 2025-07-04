<script lang="ts">
export interface HeadingEntity {
  as?: string
  text?: string
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'
  weight?: 'light' | 'normal' | 'medium' | 'semi' | 'bold' | 'extra'
  color?: string | string[]
  ui?: {
    root?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<HeadingEntity>(), {
  as: 'h1',
  level: 'h9'
})

const defineLevel = computed(() => {
  switch (props.level) {
    case 'h1':
      return 'text-[56px]' // 56px
    case 'h2':
      return 'text-4xl' // 36px
    case 'h3':
      return 'text-[28px]' // 28px
    case 'h4':
      return 'text-2xl' // 24px
    case 'h5':
      return 'text-[22px]' // 22px
    case 'h6':
      return 'text-xl' // 20px
    case 'h7':
      return 'text-lg' // 18px
    case 'h8':
      return 'text-base' // 16px
    default: // h9
      return 'text-sm leading-5.5' // 14px
  }
})
const defineWeight = computed(() => {
  switch (props.weight) {
    case 'extra':
      return 'font-extrabold'
    case 'bold':
      return 'font-bold'
    case 'semi':
      return 'font-semibold'
    case 'medium':
      return 'font-medium'
    case 'normal':
      return 'font-regular'
    default:
      return 'font-light'
  }
})
</script>

<template>
  <component
    :is="as"
    :class="[defineLevel, defineWeight, color, ui?.root]"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>
