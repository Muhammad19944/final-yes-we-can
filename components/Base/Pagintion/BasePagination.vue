<script lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import type { SizeType } from '~/types/libs'
import type { ButtonEntity } from '../Button/BaseButton.vue'

export interface PaginationProps {
  total: number
  size?: SizeType
  max?: number
  to?: RouteLocationRaw
  divider?: string
  pageCount?: number
  activeButton?: ButtonEntity
  inactiveButton?: ButtonEntity
  firstButton?: ButtonEntity
  lastButton?: ButtonEntity
  prevButton?: ButtonEntity
  nextButton?: ButtonEntity
  disabled?: boolean
  showFirst?: boolean
  showLast?: boolean
}
</script>

<script setup lang="ts">
const props = defineProps<PaginationProps>()
const emit = defineEmits(['emit:click'])
const model = defineModel<number>()

watch(
  () => model.value,
  (value) => {
    emit('emit:click', value)
  }
)
</script>

<template>
  <!-- Not Done Yet -->
  <u-pagination
    v-model="model"
    :total="props.total"
    :size="props.size"
    :max="props.max"
    :to="props.to"
    :divider="props.divider"
    :page-count="props.pageCount"
    :active-button="props.activeButton"
    :inactive-button="props.inactiveButton"
    :first-button="props.firstButton"
    :last-button="props.lastButton"
    :prev-button="props.prevButton"
    :next-button="props.nextButton"
    :disabled="props.disabled"
    :show-first="props.showFirst"
    :show-last="props.showLast"
    :ui="{
      wrapper: 'gap-x-2',
      base: 'justify-center w-9 ring-0 shadow-none',
      rounded: 'rounded-full',
      default: {
        size: 'md',
        activeButton: {
          class: 'bg-gradient-1'
        }
      }
    }"
  >
    <template #prev="{ onClick, canGoPrev }">
      <ui-tooltip
        text="Previous page"
        :popper="{ placement: 'top' }"
      >
        <ui-button
          color="white"
          size="xl"
          variant="solid"
          square
          rounded
          :disabled="!canGoPrev"
          :border="false"
          class="mr-2"
          @click="onClick"
        >
          <icon name="solar:alt-arrow-left-outline" />
        </ui-button>
      </ui-tooltip>
    </template>

    <template #next="{ onClick, canGoNext }">
      <ui-tooltip
        text="Next page"
        :popper="{ placement: 'top' }"
      >
        <ui-button
          color="white"
          size="xl"
          variant="solid"
          square
          rounded
          :disabled="!canGoNext"
          :border="false"
          class="ml-2"
          @click="onClick"
        >
          <icon name="solar:alt-arrow-right-outline" />
        </ui-button>
      </ui-tooltip>
    </template>
  </u-pagination>
</template>
