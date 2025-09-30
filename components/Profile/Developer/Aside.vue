<script setup lang="ts">
const editToggle = inject('editToggle')
</script>

<template>
  <div class="developer-aside-view sticky top-20">
    <BaseList
      :title="{
        text: 'Kasbiy faoliyat',
        weight: 'medium',
        color: 'text-(--color-greyscale-500)'
      }"
      :description="{
        level: 'h8',
        text: 'UX/UI Dizayn',
        weight: 'medium',
        color: 'text-(--color-greyscale-900)'
      }"
    >
      <template #actions>
        <template v-if="editToggle">
          <ButtonEdit
            color="primary"
            variant="ghost"
          />
        </template>
      </template>
    </BaseList>

    <div class="bg-(--color-greyscale-50) rounded-2xl my-4 px-5 py-4">
      <div class="flex items-center gap-6">
        <div>
          <div class="flex items-center gap-1.5">
            <BaseHeading
              level="h5"
              text="25 506 000"
              weight="semi"
              color="text-(--color-greyscale-900)"
            />

            <BaseHeading
              text="UZS"
              weight="normal"
              color="text-(--color-greyscale-500)"
              :ui="{
                root: 'mt-1'
              }"
            />
          </div>

          <BaseHeading
            text="Ishlab topilgan"
            weight="medium"
            color="text-(--color-greyscale-500)"
          />
        </div>

        <BaseSeparator
          orientation="vertical"
          :ui="{
            root: 'h-10',
            border: 'border-(--color-greyscale-300)'
          }"
        />

        <div>
          <div class="flex items-center gap-1.5">
            <BaseHeading
              level="h5"
              text="17"
              weight="semi"
              color="text-(--color-greyscale-900)"
            />
          </div>

          <BaseHeading
            text="Jami ishlar"
            weight="medium"
            color="text-(--color-greyscale-500)"
          />
        </div>
      </div>
    </div>

    <div class="space-y-2.5 mb-4">
      <BaseList
        :title="{
          text: 'Ish turi:',
          weight: 'medium',
          color: 'text-(--color-greyscale-500)'
        }"
        :description="{
          level: 'h8',
          text: 'Masofaviy, shartnoma',
          weight: 'medium',
          color: 'text-(--color-greyscale-900)'
        }"
      >
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit
              color="primary"
              variant="ghost"
            />
          </template>
        </template>
      </BaseList>

      <BaseList
        :title="{
          text: 'Haftalik ish soati:',
          weight: 'medium',
          color: 'text-(--color-greyscale-500)'
        }"
        :description="{
          level: 'h8',
          text: '30 soat',
          weight: 'medium',
          color: 'text-(--color-greyscale-900)'
        }"
      >
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit
              color="primary"
              variant="ghost"
            />
          </template>
        </template>
      </BaseList>

      <BaseList
        :title="{
          text: 'Profil ko’rinishi:',
          weight: 'medium',
          color: 'text-(--color-greyscale-500)'
        }"
        :description="{
          level: 'h8',
          text: 'Ommaviy',
          weight: 'medium',
          color: 'text-(--color-greyscale-900)'
        }"
      >
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit
              color="primary"
              variant="ghost"
            />
          </template>
        </template>
      </BaseList>

      <BaseList
        :title="{
          text: 'Tajriba darajasi:',
          weight: 'medium',
          color: 'text-(--color-greyscale-500)'
        }"
        :description="{
          level: 'h8',
          text: 'Senior',
          weight: 'medium',
          color: 'text-(--color-greyscale-900)'
        }"
      >
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit
              color="primary"
              variant="ghost"
            />
          </template>
        </template>
      </BaseList>
    </div>

    <AlertConnection />
  </div>
</template>
