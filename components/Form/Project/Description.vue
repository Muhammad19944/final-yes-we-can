<script setup lang="ts">
import { useProjectStore } from '~/stores/Projects'
import type { RadioPickerItemEntity } from '~/components/Card/RadioPicker/RadioPicker.vue'

const projectStore = useProjectStore()

const items = ref<RadioPickerItemEntity[]>([
  {
    label: 'Ishbay narx',
    description: 'Ma’lum bir belgilangan miqdor orqali haq to’lash',
    value: 'fixed'
  },
  {
    label: 'Soatbay narx',
    description: 'Bu funksiya tez orada ishga tushadi',
    value: 'hourly',
    disabled: true
  }
])
const role = ref('fixed')
</script>

<template>
  <div class="project-description-view">
    <CardRadioPicker
      v-model="role"
      :items="items"
      orientation="horizontal"
      :ui="{
        item: 'flex-[1]',
        label: 'mt-4'
      }"
    >
      <template #description="{ item }">
        <BaseHeading
          as="span"
          :text="item.description"
          weight="medium"
          color="text-(--color-greyscale-500)"
        />

        <template v-if="item.value === 'hourly'">
          <span class="bg-(--color-greyscale-50) absolute top-5 right-3">
            <BaseBadge
              label="Tez orada"
              variant="outline"
            />
          </span>
        </template>
      </template>
    </CardRadioPicker>

    <template v-if="role === 'fixed'">
      <div class="my-6">
        <BaseHeading
          text="Loyihangiz uchun eng yaxshi smeta qanday?"
          level="h8"
          weight="medium"
          color="text-(--color-greyscale-900)"
        />

        <BaseHeading
          text="Loyiha uchun narx belgilang va oxirida to'lang yoki loyihani bosqichlarga bo'lib, har bir bosqich tugashi bilan to'lashingiz mumkin"
          weight="medium"
          color="text-(--color-greyscale-500)"
          :ui="{
            root: 'mt-1 mb-2'
          }"
        />

        <BaseHeading
          text="Frilanseringiz bilan suhbatlashganingizda ushbu xarajatni kelishib olishingiz va muhim bosqichlarni yaratishingiz mumkin."
          weight="medium"
          color="text-(--color-greyscale-500)"
        />
      </div>

      <BaseFormField
        label="Narx"
        name="price"
      >
        <BaseFormInput
          v-model="projectStore.projectRequest.price"
          size="2xl"
          placeholder="Narxni kiriting"
          :ui="{
            trailing: 'pr-3.5'
          }"
        >
          <template #trailing>
            <BaseTooltip
              text="Loyiha so'm miqdorida hisoblanadi"
              :ui="{
                content: '!max-w-max'
              }"
            >
              <BaseHeading
                text="UZS"
                weight="medium"
                color="text-(--color-greyscale-500)"
              />
            </BaseTooltip>
          </template>
        </BaseFormInput>
      </BaseFormField>
    </template>
  </div>
</template>
