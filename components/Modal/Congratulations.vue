<script lang="ts">
interface CongratulationsEntity {
  modelValue?: boolean
  title?: string
  description?: string
  button?: {
    label?: string
  }
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<CongratulationsEntity>(), {
  title: 'Tabriklaymiz!',
  description: 'Siz frilanser sifatida muvvafaqiyatli ro’yxatdan o’tdingiz!',
  button: () => ({
    label: 'Birinchi frilans loyihani topish'
  })
})

const emit = defineEmits<{ (e: 'emit:up'): void }>()

const model = useModel(props, 'modelValue')
</script>

<template>
  <BaseModal
    v-model:open="model"
    :ui="{
      content: 'max-w-[535px]'
    }"
  >
    <template #content>
      <div class="flex flex-col items-center p-10 pt-12">
        <UIcon
          name="solar:check-circle-bold-duotone"
          class="block w-24 h-24 text-(--color-green-500)"
        />

        <div class="text-center mt-6 mb-10">
          <BaseHeading
            :text="title"
            level="h3"
            weight="semi"
            color="text-(--color-greyscale-900)"
            :ui="{
              root: 'mb-1'
            }"
          />

          <BaseHeading
            :text="description"
            level="h8"
            weight="medium"
            color="text-(--color-greyscale-500)"
          />
        </div>

        <BaseButton
          type="submit"
          size="3xl"
          rounded="xl"
          variant="solid"
          primary-gradient
          block
          :ui="{
            base: 'cursor-pointer'
          }"
          @click="emit('emit:up')"
        >
          <BaseHeading
            :text="button.label"
            level="h7"
            weight="medium"
          />
        </BaseButton>
      </div>
    </template>
  </BaseModal>
</template>
