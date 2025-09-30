<script lang="ts">
interface ProjectDrawerEntity {
  modelValue?: boolean
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ProjectDrawerEntity>(), {})

const model = useModel(props, 'modelValue')
</script>

<template>
  <BaseDrawer
    v-model:open="model"
    :close="false"
    :ui="{
      content: 'max-w-[1022px] w-full',
      header: 'justify-between'
    }"
  >
    <template #header>
      <BaseButton
        icon="solar:arrow-left-outline"
        color="success"
        variant="link"
        size="2xl"
        :ui="{
          base: 'cursor-pointer p-0'
        }"
      />

      <NuxtLinkLocale
        to="/"
        class="flex"
      >
        <BaseButton
          icon="solar:square-top-down-outline"
          color="success"
          variant="link"
          size="md"
          :ui="{
            base: 'gap-2 cursor-pointer p-0'
          }"
        >
          <BaseHeading
            level="h8"
            text="Yangi oynada ochish"
            weight="semi"
            color="text-(--color-green-500)"
          />
        </BaseButton>
      </NuxtLinkLocale>
    </template>
  </BaseDrawer>
</template>
