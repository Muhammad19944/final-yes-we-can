<script setup lang="ts">
import { useAccountStore } from '~/stores/account'

const accountStore = useAccountStore()
</script>

<template>
  <div class="profile-view">
    <ClientOnly>
      <template v-if="accountStore.isCustomer">
        <ProfileCustomer />
      </template>

      <template v-else-if="accountStore.isDeveloper">
        <ProfileDeveloper />
      </template>

      <template v-else> Loading... </template>
    </ClientOnly>
  </div>
</template>
