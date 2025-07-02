<script lang="ts">
export interface TooltipContentEntity {
  side?: 'left' | 'right' | 'top' | 'bottom'
  sideOffset?: number
  align?: 'center' | 'end' | 'start'
  alignOffset?: number
  avoidCollisions?: boolean
  collisionBoundary?: Element | (Element | null)[] | null
  collisionPadding?: number | Partial<Record<'left' | 'right' | 'top' | 'bottom', number>>
  arrowPadding?: number
  sticky?: 'partial' | 'always'
  hideWhenDetached?: boolean
  positionStrategy?: 'fixed' | 'absolute'
  updatePositionStrategy?: 'always' | 'optimized'
  forceMount?: boolean
  ariaLabel?: string
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onPointerDownOutside?: (event: Event) => void
}

export interface BaseTooltipEntity {
  text?: string
  content?: TooltipContentEntity
  arrow?: boolean
  portal?: boolean
  modelValue?: boolean
  defaultOpen?: boolean
  open?: boolean
  delayDuration?: number
  ui?: {
    content?: string | string[]
    arrow?: string | string[]
    text?: string | string[]
    kbds?: string | string[]
    kbdsSize?: string | string[]
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseTooltipEntity>(), {
  content: () => ({
    side: 'top',
    sideOffset: 4,
    collisionPadding: 4
  }),
  arrow: true,
  portal: true,
  delayDuration: 0
})
const model = useModel(props, 'modelValue')
</script>

<template>
  <UTooltip
    v-model:open="model"
    :text="text"
    :content="content"
    :arrow="arrow"
    :portal="portal"
    :default-open="defaultOpen"
    :delay-duration="delayDuration"
    :ui="{
      content: [ui?.content],
      arrow: [ui?.arrow],
      text: [ui?.text],
      kbds: [ui?.kbds],
      kbdsSize: [ui?.kbdsSize]
    }"
  >
    <template #default="{ open }">
      <slot
        name="default"
        :open="open"
      />
    </template>

    <template #content>
      <slot name="content" />
    </template>
  </UTooltip>
</template>
