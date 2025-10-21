<script lang="ts">
import { useProjectStore } from '~/stores/Projects'
import { useAccountStore } from '~/stores/account'
import type { NavigationItemEntity } from '~/components/Navigation/Project/Meta.vue'
</script>

<script setup lang="ts">
const route = useRoute()
const projectStore = useProjectStore()
const accountStore = useAccountStore()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()
const { currentLevel, currentSize, currentDuration, currentType } = useProjectMeta()

const defineGeneralItems = computed<NavigationItemEntity[]>(() => {
  return [
    {
      label: formatCurrency(Number(projectStore.projectRequest.price)),
      trailing: 'UZS',
      description: 'Ishbay narx',
      icon: 'solar:dollar-bold',
      ui: {
        icon: 'text-(--color-warning-500)'
      }
    },
    {
      label: currentLevel(projectStore.projectRequest.level)?.label ?? '',
      description: 'Talab etilgan daraja',
      icon: 'solar:bolt-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    },
    {
      label: '10 ta',
      description: 'Takliflar soni',
      icon: 'solar:user-hand-up-bold',
      ui: {
        icon: 'text-(--color-success-500)'
      }
    }
  ]
})
const defineProjectSizeItems = computed<NavigationItemEntity[]>(() => {
  return [
    {
      label: currentSize(projectStore.projectRequest.size)?.label ?? '',
      description: 'Loyiha hajmi',
      icon: 'solar:calculator-minimalistic-bold',
      ui: {
        icon: 'text-(--color-info-500)'
      }
    },
    {
      label: currentDuration(projectStore.projectRequest.duration)?.label ?? '',
      description: 'Loyiha muddati',
      icon: 'solar:calendar-bold',
      ui: {
        icon: 'text-(--color-warning-500)'
      }
    },
    {
      label: currentType(projectStore.projectRequest.type)?.label ?? '',
      description: 'Ishga olish imkoniyati',
      icon: 'solar:user-check-rounded-bold',
      ui: {
        icon: 'text-(--color-green-500)'
      }
    }
  ]
})

setLoading(true)

const getProjectById = async () => {
  try {
    await projectStore.fetchProjectGetById(route.query.id as string)
    await accountStore.fetchGetAccountById(projectStore.projectRequest.owner_id)
  } catch (error) {
    console.error(error)
  } finally {
    await sleep()
    setLoading(false)
  }
}

onMounted(async () => {
  await getProjectById()
})
</script>

<template>
  <div class="job-detail-view flex flex-col flex-1">
    <template v-if="loading">
      <div class="flex items-center justify-center flex-1">
        <UIcon
          name="svg-spinners:90-ring-with-bg"
          class="w-11 h-11 bg-primary-500"
        />
      </div>
    </template>

    <template v-else>
      <div class="flex flex-wrap gap-6">
        <div class="flex-1 space-y-2">
          <CardProjectDescription
            :title="projectStore.projectRequest.title"
            :content="projectStore.projectRequest.profession"
            time="4 soat"
            level="h5"
          />

          <CardProjectSheet title="Umumiy">
            <NavigationProjectMeta
              :items="defineGeneralItems"
              :compact="false"
              separator="divider"
              :ui="{
                root: 'mt-5',
                item: 'flex-1',
                separator: 'mr-4 -ml-4'
              }"
            />
          </CardProjectSheet>

          <CardProjectSheet title="Loyiha hajmi">
            <NavigationProjectMeta
              :items="defineProjectSizeItems"
              :compact="false"
              separator="divider"
              :ui="{
                root: 'mt-5',
                separator: 'mx-4'
              }"
            />
          </CardProjectSheet>

          <!-- <CardProjectFiles /> -->

          <CardProjectSkills :skills="projectStore.projectRequest.technologies" />

          <CardProjectCustomerCreated />

          <BaseSheet
            :ui="{
              root: 'py-4 px-6'
            }"
          >
            <BaseHeading
              text="O’xshash loyihalar"
              level="h7"
              weight="semi"
              :ui="{
                root: 'text-(--color-greyscale-900) mb-3'
              }"
            />

            <template
              v-for="item in 3"
              :key="item"
            >
              <NuxtLinkLocale
                to="/"
                class="block w-full"
              >
                <BaseHeading
                  text="Social media uchun post dizayn"
                  level="h8"
                  weight="medium"
                  color="text-(--color-greyscale-900)"
                  :ui="{
                    root: 'line-clamp-1'
                  }"
                />

                <BaseHeading
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos necessitatibus ipsam soluta cupiditate neque aspernatur sed consequuntur, molestiae ab adipisci nobis commodi quis, optio illum! Ipsa corporis id sed?"
                  weight="medium"
                  color="text-(--color-greyscale-500)"
                  :ui="{
                    root: 'line-clamp-2 mt-0.5 mb-3'
                  }"
                />

                <NavigationProjectGeneral
                  :compact="true"
                  separator="dot"
                />
              </NuxtLinkLocale>

              <BaseSeparator
                :ui="{
                  root: 'my-3'
                }"
              />
            </template>
          </BaseSheet>
        </div>

        <div class="max-w-[305px] w-full">
          <div class="sticky top-0">
            <CardProjectCustomerAside />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
