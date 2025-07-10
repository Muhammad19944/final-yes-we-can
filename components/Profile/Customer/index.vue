<script setup lang="ts"></script>

<template>
  <div class="customer-view pt-14">
    <div class="max-w-[1296px] mx-auto">
      <header class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-1">
          <BaseHeading
            text="Salom,"
            level="h3"
            weight="light"
            color="text-(--color-greyscale-900)"
          />

          <BaseHeading
            text="Kalimbetov!"
            level="h3"
            weight="semi"
            color="text-(--color-greyscale-900)"
          />
        </div>

        <NuxtLinkLocale
          to="/project/create/title"
          class="block"
        >
          <BaseButton
            color="gradient"
            label="Ish e’lon qilish"
            icon="solar:add-circle-bold"
            rounded
            :ui="{
              base: 'cursor-pointer'
            }"
          />
        </NuxtLinkLocale>
      </header>

      <WidgetProjectRecent />
    </div>
  </div>
</template>
