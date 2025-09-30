<script lang="ts">
import type { CardProjectSheetEntity } from '~/components/Card/Project/Sheet.vue'

interface CardProjectCertificatesEntity extends CardProjectSheetEntity {
  items?: { title?: string }[]
}
</script>

<script setup lang="ts">
defineProps<CardProjectCertificatesEntity>()
</script>

<template>
  <CardProjectSheet
    :card="card"
    :level="level"
    :title="title"
  >
    <template #actions>
      <slot name="actions" />
    </template>

    <div class="grid grid-cols-2 gap-4">
      <template
        v-for="item in 2"
        :key="item"
      >
        <div class="flex gap-5 bg-(--color-greyscale-50) rounded-2xl py-4 px-5">
          <BaseSheet
            :ui="{
              root: 'flex items-center justify-center w-[72px] h-[72px]'
            }"
          >
            <UIcon
              name="solar:diploma-verified-bold-duotone"
              :size="40"
              class="bg-linear-(--primary-linear)"
            />
          </BaseSheet>

          <div class="flex-1">
            <BaseList
              :title="{
                level: 'h8',
                text: 'UI Design Bootcamp',
                weight: 'semi',
                color: 'text-(--color-greyscale-900)',
                ui: {
                  root: '!mb-0'
                }
              }"
              :description="{
                text: 'Aug 12, 2024',
                weight: 'medium',
                color: 'text-(--color-greyscale-500)'
              }"
            />

            <BaseHeading
              level="h8"
              text="Coursera"
              weight="normal"
              color="text-(--color-greyscale-800)"
            />
          </div>
        </div>
      </template>
    </div>
  </CardProjectSheet>
</template>
