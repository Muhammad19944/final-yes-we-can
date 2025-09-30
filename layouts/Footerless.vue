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
  <div class="footerless-layout flex flex-col min-h-[100vh]">
    <NavigationHeader :credential-visible="true" />

    <div class="flex-1 bg-zinc-50">
      <slot />
    </div>
  </div>
</template>
