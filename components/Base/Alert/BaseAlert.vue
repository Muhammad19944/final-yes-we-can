<script lang="ts">
import { useRounded } from '~/composables/useRounded'
import type { ButtonEntity } from '~/components/Base/Button/BaseButton.vue'
import type { SizeType, ColorType, OrientationType } from '~/types/utils'

export interface BaseAlertEntity {
  color?: Exclude<ColorType, 'primary' | 'secondary'>
  rounded?: boolean | SizeType
  title?: string
  description?: string
  leading?: boolean
  trailing?: boolean
  icon?: string
  decorativeIcon?: string
  actions?: ButtonEntity[]
  actionOrientation?: OrientationType
  ui?: {
    container?: string | string[]
    content?: string | string[]
    title?: string | string[]
    description?: string | string[]
    icon?: string | string[]
    decorativeIcon?: string | string[]
    actions?: string | string[]
  }
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  labelSlot?: object
  // Custom field for rendering in storybook slots table (it needs if interface keys and slot keys are equal)
  descriptionSlot?: object
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseAlertEntity>(), {
  color: 'info',
  rounded: 'lg' as const,
  actionOrientation: 'vertical'
})

const defineColor = computed(() => {
  switch (props.color) {
    case 'success':
      return 'bg-(--color-green-75) text-(--color-green-500)'
    case 'warning':
      return 'bg-(--color-warning-100) text-(--color-warning-500)'
    case 'error':
      return 'bg-(--color-critic-100) text-(--color-critic-500)'
    case 'neutral':
      return 'bg-(--color-greyscale-100) text-(--color-greyscale-500)'
    default: // info
      return 'bg-(--color-info-100) text-(--color-info-500)'
  }
})

const { defineRounded } = useRounded(computed(() => props.rounded))
const slots = useSlots()
</script>

<template>
  <div
    class="base-alert-view flex items-center w-full relative overflow-hidden gap-2.5 p-4"
    :class="[defineColor, defineRounded, ui?.container]"
  >
    <template v-if="!trailing">
      <UIcon
        v-if="icon"
        :name="icon"
        :class="ui?.icon"
        class="shrink-0 size-6"
      />
    </template>

    <div class="min-w-0 flex-1 flex flex-col">
      <div
        class="min-w-0 flex-1 flex flex-col space-y-1"
        :class="[ui?.content]"
      >
        <slot
          v-if="title || slots.title"
          name="title"
        >
          <BaseHeading
            :text="title"
            level="h8"
            weight="semi"
            color="text-[var(--color-greyscale-900)]"
          />
        </slot>

        <slot
          v-if="description || slots.description"
          name="description"
        >
          <BaseHeading
            :text="description"
            weight="medium"
            color="text-[var(--color-greyscale-600)]"
          />
        </slot>
      </div>

      <template v-if="actionOrientation === 'vertical' && actions?.length">
        <div
          class="flex items-center gap-2 mt-2"
          :class="[ui?.actions]"
        >
          <template
            v-for="(button, index) in actions"
            :key="index"
          >
            <BaseButton v-bind="button" />
          </template>
        </div>
      </template>
    </div>

    <div class="flex flex-wrap gap-1.5 shrink-0 items-center">
      <template v-if="actionOrientation === 'horizontal' && actions?.length">
        <div
          class="flex items-center gap-2"
          :class="[ui?.actions]"
        >
          <template
            v-for="(button, index) in actions"
            :key="index"
          >
            <BaseButton v-bind="button" />
          </template>
        </div>
      </template>
    </div>

    <template v-if="decorativeIcon">
      <UIcon
        :name="decorativeIcon"
        :class="ui?.decorativeIcon"
        class="absolute right-3 -bottom-7 size-24"
      />
    </template>

    <template v-if="trailing">
      <UIcon
        v-if="icon"
        :name="icon"
        :class="ui?.icon"
        class="shrink-0 size-6"
      />
    </template>
  </div>
</template>
