<script lang="ts" setup></script>

<template>
  <header class="header-view fixed w-full bg-white z-10 border-b border-b-greyscale-300/50">
    <ui-container>
      <div class="flex items-center h-20">
        <nuxt-link-locale
          to="/jobs"
          class="inline-block"
        >
          <img
            src="/image/logo.svg"
            alt="Logo"
          />
        </nuxt-link-locale>

        <div class="flex items-center justify-center flex-1 gap-12">
          <nuxt-link-locale
            to="/jobs"
            class="flex items-center transition-colors text-greyscale-900 h-10 hover:text-primary-500"
          >
            Ish topish
          </nuxt-link-locale>
        </div>

        <div class="flex items-center justify-end gap-4 max-w-[496px] w-full">asd</div>
      </div>
    </ui-container>
  </header>
</template>

<style lang="scss" scoped></style>
