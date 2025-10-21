<script lang="ts">
import { useAccountStore } from '~/stores/account'

interface AlerConnectionEntity {
  showConnectionText?: boolean
}
</script>

<script setup lang="ts">
defineProps<AlerConnectionEntity>()

const accountStore = useAccountStore()
</script>

<template>
  <BaseAlert
    color="success"
    decorative-icon="solar:medal-ribbons-star-bold-duotone"
    rounded="xl"
    :actions="[
      { label: 'Batafsil', color: 'white', variant: 'solid', size: 'sm', raised: true },
      { label: 'Sotib olish', color: 'white', variant: 'solid', size: 'sm', raised: true }
    ]"
    :ui="{
      container: 'px-5',
      decorativeIcon: 'rotate-[15deg] !-bottom-6 !-right-2'
    }"
  >
    <template #title>
      <div class="flex items-center gap-2">
        <BaseHeading
          text="Bog’lanishlar:"
          weight="normal"
          color="text-[var(--color-greyscale-600)]"
        />
        <BaseHeading
          :text="`${accountStore.account.info?.connection} ta`"
          weight="semi"
          color="text-[var(--color-greyscale-900)]"
        />
      </div>
    </template>
  </BaseAlert>

  <template v-if="showConnectionText">
    <div class="flex items-center gap-1.5 mt-2.5">
      <BaseHeading
        text="Ish uchun talab etiladi:"
        weight="medium"
        color="text-(--color-greyscale-500)"
      />

      <BaseHeading
        text="1 ta"
        weight="medium"
        color="text-(--color-greyscale-900)"
      />
    </div>
  </template>
</template>
