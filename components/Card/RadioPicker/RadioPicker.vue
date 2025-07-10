<script lang="ts">
import type { BaseFormRadioGroupItemEntity, BaseFormRadioGroupEntity } from '~/components/Base/Form/BaseFormRadioGroup.vue'

export interface RadioPickerItemEntity extends BaseFormRadioGroupItemEntity {
  icon?: string
}

export interface RadioPickerEntity extends BaseFormRadioGroupEntity {
  items?: RadioPickerItemEntity[]
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<RadioPickerEntity>(), {
  valueKey: 'value',
  labelKey: 'label',
  descriptionKey: 'description',
  items: () => []
})
const model = useModel(props, 'modelValue')
</script>

<template>
  <BaseFormRadioGroup
    v-model="model"
    :value-key="valueKey"
    :label-key="labelKey"
    :description-key="descriptionKey"
    :items="items"
    :default-value="defaultValue"
    :orientation="orientation"
    color="primary"
    variant="card"
    indicator="end"
    size="lg"
    :ui="{
      fieldset: `gap-y-5`,
      item: `border-[2px] border-white bg-(--color-greyscale-50) rounded-xl has-data-[state=checked]:bg-(--color-green-50) cursor-pointer ${ui?.item}`,
      indicator: `after:size-2.5`,
      base: `size-5`,
      label: `${ui?.label}`
    }"
  >
    <template #label="{ item }">
      <span class="flex items-center gap-4 py-[2px]">
        <template v-if="item.icon">
          <BaseAvatar
            :background="item.value === model ? 'gradient' : 'white'"
            size="xl"
            :icon="item.icon"
          />
        </template>

        <BaseHeading
          :text="item.label"
          as="span"
          level="h8"
          weight="medium"
          class="text-[var(--color-gray-900)]"
        />
      </span>
    </template>

    <template #description="{ item }">
      <slot
        name="description"
        :item="item"
      />
    </template>
  </BaseFormRadioGroup>
</template>
