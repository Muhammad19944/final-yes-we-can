<script setup lang="ts"></script>

<template>
  <u-app
    :toaster="{
      position: 'top-right',
      duration: 8000
    }"
  >
    <nuxt-loading-indicator />

    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </u-app>
</template>
