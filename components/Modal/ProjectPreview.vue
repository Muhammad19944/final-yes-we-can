<script lang="ts">
interface ProjectPreviewEntity {
  modelValue?: boolean
  projectId: string
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ProjectPreviewEntity>(), {})
const model = useModel(props, 'modelValue')
const emit = defineEmits<{
  (e: 'emit:close', value: boolean): void
}>()
</script>

<template>
  <BaseModal
    v-model:open="model"
    :ui="{
      content: 'max-w-[865px]',
      body: 'bg-(--color-greyscale-50) !py-5'
    }"
  >
    <template #header>
      <BaseHeading
        text="Umumiy ko’rinish"
        level="h5"
        weight="semi"
        color="text-(--color-greyscale-900)"
      />

      <div class="flex-1" />

      <BaseButton
        color="greyscale"
        size="xs"
        square
        rounded
        icon="heroicons:x-mark-20-solid"
        :ui="{
          base: 'cursor-pointer'
        }"
        @click="emit('emit:close', false)"
      />
    </template>

    <template #body>
      <CardProjectDescription
        title="Figmada dashboard dizayn chizish"
        time="Loyiha sarlavhasi"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rem ex, ipsum autem odio velit dicta, quis provident repellendus quo aperiam officiis facere, sint inventore? Quia amet blanditiis suscipit perferendis."
      />
    </template>
  </BaseModal>
</template>
