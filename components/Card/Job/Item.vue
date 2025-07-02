<script setup lang="ts">
const skills = ref([
  {
    label: 'Figma'
  },
  {
    label: 'UX/UI dizayn'
  },
  {
    label: 'Dashboard'
  },
  {
    label: 'Websayt'
  }
])
</script>

<template>
  <BaseSheet
    :ui="{
      root: 'py-5 px-6'
    }"
  >
    <div class="flex items-center justify-between mb-1">
      <div class="flex items-center gap-2">
        <BaseHeading
          text="2 kun oldin"
          weight="medium"
          color="text-(--color-greyscale-500)"
        />

        <BaseDots />

        <BaseBadge
          label="Ko’rilgan"
          variant="outline"
        />
      </div>

      <BaseButton
        icon="solar:heart-bold"
        variant="link"
        :ui="{
          base: 'cursor-pointer p-0',
          leadingIcon: 'text-(--color-greyscale-400) hover:text-(--color-green-500)'
        }"
      />
    </div>

    <BaseHeading
      text="Mobile app development"
      level="h7"
      weight="semi"
      color="text-(--color-greyscale-900)"
    />

    <BaseHeading
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi tenetur reprehenderit eaque earum voluptatum ab accusantium, dicta doloribus perferendis aut natus voluptatem minus sed error a necessitatibus quibusdam. Quam."
      color="text-(--color-greyscale-500)"
      :ui="{
        root: 'line-clamp-2 mt-1.5 mb-3'
      }"
    />

    <TechnologySkills :skills="skills" />

    <BaseSeparator
      :ui="{
        root: 'my-4'
      }"
    />

    <NavigationJobGeneral
      :compact="true"
      separator="dot"
    />
  </BaseSheet>
</template>
