<script lang="ts">
interface NavigationHeader {
  layout?: 'default' | 'auth'
  ui?: {
    content?: string
  }
}
</script>

<script setup lang="ts">
const route = useRoute()

withDefaults(defineProps<NavigationHeader>(), {
  layout: 'default'
})

const defineContentWidth = computed(() => {
  return {
    'max-w-[865px]': route.fullPath.includes('skills')
  }
})
</script>

<template>
  <header class="header-view w-full fixed top-0 bg-white z-10">
    <BaseContainer>
      <div
        class="flex items-center justify-between h-16"
        :class="[defineContentWidth, ui?.content]"
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
