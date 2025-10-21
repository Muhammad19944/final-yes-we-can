<script lang="ts">
import { useProjectStore } from '~/stores/Projects'
</script>

<script setup lang="ts">
definePageMeta({
  layout: 'footerless'
})

const route = useRoute()
const router = useRouter()
const { locale } = useI18n()
const projectStore = useProjectStore()

const prevStep = () => {
  router.go(-1)
}

onBeforeUnmount(() => {
  projectStore.actionProjectResetModel()
})
</script>

<template>
  <div class="flex flex-col flex-1">
    <div class="flex flex-col flex-1 max-w-[1022px] mx-auto my-15">
      <WidgetProjectDetail />
    </div>

    <NavigationFooterStepper
      :prev="{
        text: 'Orqaga'
      }"
      :next="{
        text: 'Taklif yuborish'
      }"
      :ui="{
        content: 'max-w-[1035px]'
      }"
      @emit:prev="prevStep"
    >
      <template #next>
        <div class="flex items-center gap-3">
          <BaseButton
            label="Saqlab qo’yish"
            icon="solar:heart-bold"
            color="greyscale"
            size="lg"
            :ui="{
              base: 'cursor-pointer',
              leadingIcon: 'text-greyscale-300'
            }"
          />

          <BaseButton
            primary-gradient
            variant="solid"
            :to="`/${locale}/project/proposal/send/${route.query.id}`"
          >
            Taklif yuborish
          </BaseButton>
        </div>
      </template>
    </NavigationFooterStepper>
  </div>
</template>
