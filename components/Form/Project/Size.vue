<script setup lang="ts">
import { useProjectStore } from '~/stores/Projects'
import { useProjectMeta } from '~/composables/useProjectMeta'

const projectStore = useProjectStore()
const { size, duration, level, type } = useProjectMeta()
</script>

<template>
  <div class="project-size-view">
    <BaseFormField
      label="Ishingiz hajmini tanlang"
      name="size"
      size="2xl"
      :ui="{
        container: 'mt-3'
      }"
    >
      <BaseFormRadioGroup
        v-model="projectStore.projectRequest.size"
        :items="size"
        size="lg"
        :ui="{
          fieldset: 'space-y-3',
          container: 'mt-0.75'
        }"
      >
        <template #label="{ item }">
          <BaseHeading
            as="span"
            :text="item.label"
            level="h8"
            weight="medium"
            color="text-(--color-greyscale-900)"
          />
        </template>

        <template #description="{ item }">
          <BaseHeading
            as="span"
            :text="item.hint"
            weight="medium"
            color="text-(--color-greyscale-500)"
          />
        </template>
      </BaseFormRadioGroup>
    </BaseFormField>

    <BaseSeparator
      :ui="{
        root: 'my-5'
      }"
    />

    <BaseFormField
      label="Sizning ishingiz qancha davom etadi?"
      name="duration"
      size="2xl"
      :ui="{
        container: 'mt-3'
      }"
    >
      <BaseFormRadioGroup
        v-model="projectStore.projectRequest.duration"
        :items="duration"
        size="lg"
        :ui="{
          fieldset: 'space-y-3',
          container: 'mt-0.75'
        }"
      >
        <template #label="{ item }">
          <BaseHeading
            as="span"
            :text="item.label"
            level="h8"
            weight="medium"
            color="text-(--color-greyscale-900)"
          />
        </template>

        <template #description="{ item }">
          <BaseHeading
            as="span"
            :text="item.hint"
            weight="medium"
            color="text-(--color-greyscale-500)"
          />
        </template>
      </BaseFormRadioGroup>
    </BaseFormField>

    <BaseSeparator
      :ui="{
        root: 'my-5'
      }"
    />

    <BaseFormField
      label="Bunga qanday darajadagi ishchi kerak bo'ladi?"
      name="level"
      size="2xl"
      :ui="{
        container: 'mt-3'
      }"
    >
      <BaseFormRadioGroup
        v-model="projectStore.projectRequest.level"
        :items="level"
        size="lg"
        :ui="{
          fieldset: 'space-y-3',
          container: 'mt-0.75'
        }"
      >
        <template #label="{ item }">
          <BaseHeading
            as="span"
            :text="item.label"
            level="h8"
            weight="medium"
            color="text-(--color-greyscale-900)"
          />
        </template>

        <template #description="{ item }">
          <BaseHeading
            as="span"
            :text="item.hint"
            weight="medium"
            color="text-(--color-greyscale-500)"
          />
        </template>
      </BaseFormRadioGroup>
    </BaseFormField>

    <BaseSeparator
      :ui="{
        root: 'my-5'
      }"
    />

    <BaseFormField
      label="Bu ish shartnoma asosida ishga olish imkoniyatimi ?"
      name="type"
      size="2xl"
      :ui="{
        container: 'mt-3'
      }"
    >
      <BaseFormRadioGroup
        v-model="projectStore.projectRequest.type"
        :items="type"
        size="lg"
        :ui="{
          fieldset: 'space-y-3',
          container: 'mt-0.75'
        }"
      >
        <template #label="{ item }">
          <BaseHeading
            as="span"
            :text="item.label"
            level="h8"
            weight="medium"
            color="text-(--color-greyscale-900)"
          />
        </template>

        <template #description="{ item }">
          <BaseHeading
            as="span"
            :text="item.hint"
            weight="medium"
            color="text-(--color-greyscale-500)"
          />
        </template>
      </BaseFormRadioGroup>
    </BaseFormField>
  </div>
</template>
