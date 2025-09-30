<script setup lang="ts"></script>

<template>
  <div class="welcome-banner-view flex items-center justify-center bg-zinc-50 h-[435px] relative">
    <div class="relative max-w-[930px] w-full z-[2]">
      <h1 class="font-semibold text-[56px] text-center leading-[1.43em]">
        O'zingizning birinchi frilans <br />
        <span class="bg-linear-(--primary-linear) bg-clip-text text-transparent">loyihangizni</span> toping!
      </h1>

      <p class="text-center text-lg text-(--color-greyscale-500) mt-2">Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>

      <div class="flex items-center justify-center gap-4 mt-10">
        <NuxtLinkLocale
          to="/auth/registration"
          class="block min-w-[185px] h-14"
        >
          <BaseButton
            size="2xl"
            variant="solid"
            primary-gradient
            rounded
            block
            :ui="{
              base: 'cursor-pointer'
            }"
          >
            <span class="text-white">Ro'yxatdan o'tish</span>
          </BaseButton>
        </NuxtLinkLocale>

        <NuxtLinkLocale
          to="/auth/login"
          class="block min-w-[140px] h-14"
        >
          <BaseButton
            size="2xl"
            color="greyscale"
            variant="solid"
            rounded
            block
            :ui="{
              base: 'cursor-pointer'
            }"
          >
            <span class="text-greyscale-900">Kirish</span>
          </BaseButton>
        </NuxtLinkLocale>
      </div>
    </div>

    <img
      src="/image/pattern-left.svg"
      alt="pattern-left"
      class="absolute left-0 h-full"
    />
    <img
      src="/image/pattern-right.svg"
      alt="pattern-right"
      class="absolute right-0 h-full"
    />
  </div>
</template>
