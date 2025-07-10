<script setup lang="ts"></script>

<template>
  <div class="footerless-layout flex flex-col min-h-[100vh]">
    <NavigationHeader />

    <div class="flex-1 bg-zinc-50">
      <slot />
    </div>
  </div>
</template>
