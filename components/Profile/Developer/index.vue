<script lang="ts">
import { useAccountStore } from '~/stores/account'
</script>

<script setup lang="ts">
const accountStore = useAccountStore()

const editToggle = ref(false)

const handleEditToggle = (state: boolean) => {
  editToggle.value = state
}

provide('editToggle', editToggle)
</script>

<template>
  <div class="profile-developer-view mt-16 mb-6">
    <div class="max-w-[1560px] w-full mx-auto px-2 sm:px-2 lg:px-4">
      <BaseSheet shadow="shadow-2">
        <header class="flex items-center justify-between border-b border-b-(--color-greyscale-200) p-6">
          <BaseAvatarLabeled
            :alt="accountStore.accountName?.toUpperCase()"
            :custom-size="56"
            :ui="{
              root: 'gap-4',
              content: '!space-y-0'
            }"
          >
            <template #chip>
              <template v-if="editToggle">
                <div class="absolute -bottom-2 -right-3">
                  <ButtonEdit
                    borderable
                    :ui="{
                      leadingIcon: 'size-3'
                    }"
                  />
                </div>
              </template>
            </template>

            <template #badges>
              <BaseBadge
                label="Faol frilanser"
                variant="outline"
                size="md"
              />
            </template>

            <template #label>
              <BaseHeading
                :text="accountStore.accountName"
                level="h5"
                weight="semi"
                color="text-(--color-greyscale-900)"
              />
            </template>

            <template #subLabel>
              <div class="flex items-center gap-1">
                <UIcon
                  name="solar:map-point-bold"
                  class="text-(--color-greyscale-400)"
                />

                <BaseHeading
                  text="Toshkent, O’zbekiston - 13:35"
                  weight="medium"
                  color="text-(--color-greyscale-500)"
                />
              </div>
            </template>
          </BaseAvatarLabeled>

          <div class="flex items-center gap-3">
            <template v-if="!editToggle">
              <BaseButton
                size="xl"
                variant="solid"
                color="gradient"
                rounded
                icon="solar:pen-bold"
                trailing
                :ui="{
                  base: 'px-4',
                  trailingIcon: 'size-4'
                }"
                @click="handleEditToggle(true)"
              >
                <BaseHeading
                  text="Profil sozlamalari"
                  weight="semi"
                  color="text-white"
                />
              </BaseButton>
            </template>

            <template v-else>
              <BaseButton
                size="xl"
                variant="solid"
                color="gradient"
                icon="solar:settings-bold"
                rounded
                :ui="{
                  base: 'px-4',
                  leadingIcon: 'size-4'
                }"
              >
                <BaseHeading
                  text="Sozlamalar"
                  weight="semi"
                  color="text-white"
                />
              </BaseButton>

              <BaseButton
                size="xl"
                variant="solid"
                color="greyscale"
                rounded
                icon="solar:eye-bold"
                :ui="{
                  base: 'px-4',
                  leadingIcon: 'size-4.5'
                }"
                @click="handleEditToggle(false)"
              >
                <BaseHeading
                  text="Umumiy ko’rinish"
                  weight="semi"
                  color="text-(--color-greyscale-900)"
                />
              </BaseButton>
            </template>
          </div>
        </header>

        <main class="flex">
          <div class="w-[375px] border-r border-r-(--color-greyscale-200) p-6">
            <ProfileDeveloperAside />
          </div>

          <div class="flex-1">
            <ProfileDeveloperContent />
          </div>
        </main>
      </BaseSheet>
    </div>
  </div>
</template>
