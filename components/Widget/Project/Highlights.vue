<script lang="ts">
import type { HighlightTabTypes } from '~/components/Modal/Highlights.vue'
</script>

<script setup lang="ts">
const modal = ref(false)
const tabValue = ref<HighlightTabTypes>('project')

const openModal = (value: HighlightTabTypes) => {
  tabValue.value = value
  modal.value = true
}
</script>

<template>
  <div class="highlights-view">
    <BaseAlert
      title="Eng yaxshi ishingizni oson va chiroyli tarzda namoyish eting!"
      description="Portfoliolarda endi ko'proq imkoniyatlar va yangi dizayn mavjud"
      color="warning"
      icon="solar:bolt-circle-bold-duotone"
      action-orientation="horizontal"
      :actions="[{ label: 'Batafsil', color: 'warning', variant: 'solid', size: 'lg' }]"
      :ui="{ container: '!p-5', icon: 'size-12', content: '!space-y-0' }"
      rounded="xl"
    />

    <div class="grid grid-cols-3 gap-4 my-5">
      <div
        class="bg-(--color-greyscale-50) hover:bg-(--color-greyscale-100) cursor-pointer rounded-xl p-5"
        @click="openModal('project')"
      >
        <UIcon
          name="solar:case-round-bold-duotone"
          size="48"
          class="text-(--color-info-500) mb-4"
        />

        <BaseHeading
          level="h8"
          text="YWC dan loyiha qo’shish"
          weight="semi"
          color="text-(--color-greyscale-900)"
        />
      </div>

      <div
        class="bg-(--color-greyscale-50) hover:bg-(--color-greyscale-100) cursor-pointer rounded-xl p-5"
        @click="openModal('portfolio')"
      >
        <UIcon
          name="solar:palette-round-bold-duotone"
          size="48"
          class="text-(--color-warning-500) mb-4"
        />

        <BaseHeading
          level="h8"
          text="Portfoliodan loyiha qo’shish"
          weight="semi"
          color="text-(--color-greyscale-900)"
        />
      </div>

      <div
        class="bg-(--color-greyscale-50) hover:bg-(--color-greyscale-100) cursor-pointer rounded-xl p-5"
        @click="openModal('cerificate')"
      >
        <UIcon
          name="solar:diploma-verified-bold-duotone"
          size="48"
          class="text-(--color-green-500) mb-4"
        />

        <BaseHeading
          level="h8"
          text="Sertifikat qo’shish"
          weight="semi"
          color="text-(--color-greyscale-900)"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2">
      <template
        v-for="item in 4"
        :key="item"
      >
        <div class="flex gap-5 bg-(--color-greyscale-50) hover:bg-(--color-greyscale-100) cursor-pointer rounded-xl p-3">
          <div class="w-10 h-10 rounded-xl overflow-hidden">
            <img
              src="/image/logo.svg"
              alt="Image"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex-1">
            <BaseList
              :title="{
                text: 'Portfolio',
                weight: 'medium',
                color: 'text-(--color-greyscale-500)',
                ui: {
                  root: 'text-[13px] !mb-0'
                }
              }"
              :description="{
                text: 'Movier - Media Dashboard Design Movier',
                weight: 'medium',
                color: 'text-(--color-greyscale-900)',
                ui: {
                  root: 'line-clamp-1'
                }
              }"
              :ui="{
                root: '!items-center'
              }"
            >
              <template #actions>
                <BaseButton
                  size="xs"
                  color="greyscale"
                  variant="soft"
                  icon="heroicons:x-mark-20-solid"
                  square
                  rounded
                />
              </template>
            </BaseList>
          </div>
        </div>
      </template>
    </div>

    <ModalHighlights
      v-model="modal"
      :tab-default-value="tabValue"
    />
  </div>
</template>
