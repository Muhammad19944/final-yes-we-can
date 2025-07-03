<script lang="ts">
interface NavigationHeader {
  layout?: 'default' | 'auth'
  ui?: {
    content?: string
  }
}
</script>

<script setup lang="ts">
withDefaults(defineProps<NavigationHeader>(), {
  layout: 'default'
})
</script>

<template>
  <header class="header-view w-full fixed top-0 bg-white z-10">
    <BaseContainer>
      <div
        class="flex items-center justify-between h-16"
        :class="[ui?.content]"
      >
        <nuxt-link-locale
          to="/"
          class="inline-block"
        >
          <img
            src="/image/logo.svg"
            alt="Logo"
            class="max-w-[150px]"
          />
        </nuxt-link-locale>

        <template v-if="layout !== 'auth'">
          <div class="flex items-center justify-center flex-1 gap-6">content</div>
        </template>

        <div class="flex items-center gap-4">
          <SelectLanguage />
        </div>
      </div>
    </BaseContainer>
  </header>
</template>
