<script setup lang="ts"></script>

<template>
  <div class="auth-layout flex flex-col min-h-[100vh]">
    <NavigationHeader
      layout="auth"
      :ui="{
        content: 'max-w-[535px] w-full mx-auto'
      }"
    />

    <div class="flex items-center justify-center flex-1 bg-zinc-50 pt-16">
      <slot />
    </div>
  </div>
</template>
