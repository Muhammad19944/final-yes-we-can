<script lang="ts">
export interface NavigationItemEntity {
  label: string
  trailing?: string
  icon: string
  description?: string
  ui?: {
    label?: string
    icon?: string
    description?: string
    link?: string
  }
}

interface NavigationJobMetaEntity {
  items: NavigationItemEntity[]
  compact?: boolean
  separator?: 'dot' | 'divider'
}
</script>

<script setup lang="ts">
withDefaults(defineProps<NavigationJobMetaEntity>(), {
  separator: 'dot',
  compact: true
})
</script>

<template>
  <BaseBreadcrumb
    :items="items"
    :ui="{
      list: 'gap-2',
      link: 'gap-1 font-medium text-(--color-greyscale-900)'
    }"
  >
    <template #item="{ item }">
      <div
        class="flex"
        :class="[
          compact ? 'gap-1' : 'gap-2',
          {
            'items-center': !item.description
          }
        ]"
      >
        <UIcon
          :name="item.icon"
          :size="compact ? 18 : 20"
          :class="[item.ui?.icon]"
        />

        <div
          class="flex-1"
          :class="[
            {
              '-mt-0.5': compact && item.description,
              '-mt-1': !compact && item.description
            }
          ]"
        >
          <div class="flex flex-1 gap-1">
            <BaseHeading
              :text="item.label"
              :level="compact ? 'h9' : 'h8'"
              weight="medium"
              :color="item.ui?.label"
            />

            <template v-if="item.trailing">
              <BaseHeading
                :text="item.trailing"
                :level="compact ? 'h9' : 'h8'"
                weight="medium"
                color="text-(--color-greyscale-400)"
              />
            </template>
          </div>

          <template v-if="item.description">
            <BaseHeading
              :text="item.description"
              weight="medium"
              color="text-(--color-greyscale-500)"
              class="mt-0.5"
            />
          </template>
        </div>
      </div>
    </template>

    <template #separator>
      <template v-if="separator === 'dot'">
        <div class="w-1 h-1 rounded-full bg-(--color-greyscale-400)" />
      </template>

      <template v-else>
        <div class="w-[1px] h-10 bg-(--color-greyscale-200)" />
      </template>
    </template>
  </BaseBreadcrumb>
</template>
