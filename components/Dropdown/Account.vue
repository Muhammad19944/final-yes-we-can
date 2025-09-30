<script lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { useAccountStore } from '~/stores/account'
</script>

<script setup lang="ts">
const { locale } = useI18n()
const accountStore = useAccountStore()

const dropdown = ref(false)
const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'Shaxsiy kabinet',
      icon: 'solar:user-circle-outline',
      onSelect: async () => {
        await navigateTo(`/${locale.value}/profile`)
      },
      ui: {
        item: 'cursor-pointer',
        itemLeadingIcon: 'order-1 size-[18px]'
      }
    },
    {
      label: 'Tizimdan chiqish',
      icon: 'solar:logout-2-outline',
      onSelect: async () => {
        if (!confirm(`Are you sure log out ?`)) {
          return
        }

        await useClientFetch('/api/account/auth/logout', { method: 'post' })
        accountStore.logOut()
        navigateTo(`/${locale.value}/auth/login`)
      },
      ui: {
        item: 'bg-(--color-critic-50) !text-(--color-critic-500) rounded-md cursor-pointer',
        itemLeadingIcon: 'order-1 !text-(--color-critic-500) size-[18px]'
      }
    }
  ]
])
</script>

<template>
  <BaseDropdown
    v-model:open="dropdown"
    :items="items"
    :arrow="true"
  >
    <BaseAvatarLabeled
      size="lg"
      :alt="accountStore.accountName?.toUpperCase()"
      :ui="{
        root: 'cursor-pointer',
        content: '!space-y-0'
      }"
    >
      <template #label>
        <BaseHeading
          :text="accountStore.accountName"
          weight="medium"
          :ui="{
            root: '!leading-normal -mt-0.5'
          }"
        />
      </template>

      <template #subLabel>
        <BaseHeading
          :text="accountStore.account?.role"
          weight="normal"
          color="text-(--color-greyscale-600)"
          :ui="{
            root: 'text-[13px] !leading-normal -mt-0.5'
          }"
        />
      </template>
    </BaseAvatarLabeled>
  </BaseDropdown>
</template>
