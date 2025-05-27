<script lang="ts" setup></script>

<template>
  <header class="header-view fixed w-full bg-white z-10 border-b border-b-greyscale-300/50">
    <ui-container>
      <div class="flex items-center h-16">
        <nuxt-link-locale
          to="/jobs"
          class="inline-block"
        >
          <img
            src="/image/logo.svg"
            alt="Logo"
            class="max-w-[150px]"
          />
        </nuxt-link-locale>

        <div class="flex items-center justify-center flex-1 gap-6">
          <nuxt-link-locale
            to="/jobs"
            class="flex items-center transition-colors text-greyscale-900 hover:text-primary-500 text-sm font-medium px-2.5 py-1.5"
          >
            Ish topish
          </nuxt-link-locale>

          <nuxt-link-locale
            to="/jobs"
            class="flex items-center transition-colors text-greyscale-900 hover:text-primary-500 text-sm font-medium px-2.5 py-1.5"
          >
            Ishni yetkazish
          </nuxt-link-locale>

          <nuxt-link-locale
            to="/jobs"
            class="flex items-center transition-colors text-greyscale-900 hover:text-primary-500 text-sm font-medium px-2.5 py-1.5"
          >
            Analitika
          </nuxt-link-locale>

          <nuxt-link-locale
            to="/jobs"
            class="flex items-center transition-colors text-greyscale-900 hover:text-primary-500 text-sm font-medium px-2.5 py-1.5"
          >
            Sozlamalar
          </nuxt-link-locale>
        </div>

        <div class="flex items-center justify-end gap-4 max-w-[496px] w-full">
          <ui-avatar src="https://github.com/benjamincanac.png" />

          <!-- <ui-avatar-labeled
            src="https://github.com/benjamincanac.png"
            label="Kalimbetov Dilmurod"
            sub-label="UX/UI dizayner, Product dizayner"
          /> -->

          <ui-heading
            level="h7"
            weight="medium"
          >
            Lorem, ipsum.
          </ui-heading>
        </div>
      </div>
    </ui-container>
  </header>
</template>

<style lang="scss" scoped></style>
