<script lang="ts" setup>
// const { locale } = useI18n()

// onMounted(() => {
//   navigateTo(`/${locale.value}/jobs`)
// })
</script>

<template>
  <div class="layout-wrapper flex flex-col min-h-[100vh] bg-zinc-50">
    <the-header />

    <div class="flex flex-col flex-1">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
