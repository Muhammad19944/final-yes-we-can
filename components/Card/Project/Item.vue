<script lang="ts">
import type { NavigationItemEntity } from '~/components/Navigation/Project/Meta.vue'
import type { OptionEntity } from '~/shared/types/utils'

interface ProjectItemEntity {
  date?: string
  title?: string
  description?: string
  skills?: OptionEntity[]
  navigations: NavigationItemEntity[]
}
</script>

<script setup lang="ts">
const props = defineProps<ProjectItemEntity>()
const formatDate = useDateFormat(props.date, 'DD.MM.YYYY HH:mm')
</script>

<template>
  <BaseSheet
    :ui="{
      root: 'cursor-pointer transition-shadow hover:shadow-50 py-5 px-6'
    }"
  >
    <div class="flex items-center justify-between mb-1">
      <div class="flex items-center gap-2">
        <BaseHeading
          :text="formatDate"
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
      :text="title"
      level="h6"
      weight="semi"
      color="text-(--color-greyscale-900)"
    />

    <template v-if="description">
      <BaseHeading
        :text="description"
        weight="normal"
        color="text-(--color-greyscale-500)"
        :ui="{
          root: `line-clamp-2 mt-1.5 ${skills?.length ? 'mb-3' : ''}`
        }"
      />
    </template>

    <TechnologySkills :skills="skills" />

    <BaseSeparator
      :ui="{
        root: 'my-4'
      }"
    />

    <NavigationProjectMeta :items="navigations" />

    <!-- <NavigationProjectGeneral
      :compact="true"
      separator="dot"
    /> -->
  </BaseSheet>
</template>
