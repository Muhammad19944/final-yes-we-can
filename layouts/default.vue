<script lang="ts">
import { useAccountStore } from '~/stores/account'
import type { CookieEntity } from '~/shared/types/cookie'

const accountStore = useAccountStore()
</script>

<script lang="ts" setup>
const { data } = await useFetch<CookieEntity>('/api/account/auth/cookie')

if (data.value?.Access) {
  await accountStore.getAccount()
}
</script>

<template>
  <div class="layout-wrapper flex flex-col min-h-[100vh] bg-zinc-50">
    <NavigationHeader :credential-visible="true" />

    <div class="flex flex-col flex-1">
      <slot />
    </div>

    <NavigationFooterMain />
  </div>
</template>

<style lang="scss" scoped></style>
