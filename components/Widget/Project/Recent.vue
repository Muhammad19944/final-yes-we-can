<script lang="ts">
import { formatCurrency } from '~/utils'
import type { NavigationItemEntity } from '~/components/Navigation/Project/Meta.vue'
import type { FetchResponseWrapperEntity } from '~/shared/types/utils'
import type { ProjectModelResponseEntity, ProjectCustomerFilterEntity, ProjectStatusType } from '~/shared/types/project'
</script>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { loading, setLoading } = useLoader()
const { sleep } = useTimeout()

const data = ref<FetchResponseWrapperEntity<ProjectModelResponseEntity>>({
  count: 0,
  next: null,
  previous: null,
  results: []
})
const filters = ref<ProjectCustomerFilterEntity>({
  status: 'draft',
  p: 1
})

const navigations = (item: ProjectModelResponseEntity) => {
  const links: NavigationItemEntity[] = [
    {
      label: item.payment_verified ? 'To’lov tasdiqlangan' : 'To’lov tasdiqlanmagan',
      icon: item.payment_verified ? 'solar:check-circle-bold' : 'solar:question-circle-bold',
      ui: {
        label: item.price ? '' : '!text-(--color-greyscale-600)',
        icon: item.payment_verified ? 'text-primary-500' : 'text-(--color-greyscale-400)'
      }
    }
  ]

  links.unshift({
    label: item.price ? `${formatCurrency(Number(item.price))}` : 'Belgilanmagan',
    trailing: item.price ? 'UZS' : '',
    icon: 'solar:dollar-bold',
    ui: {
      label: item.price ? '' : '!text-(--color-greyscale-600)',
      icon: item.price ? 'text-warning-500' : 'text-(--color-greyscale-400)'
    }
  })

  return links
}

const loadRecentProject = async (query: ProjectCustomerFilterEntity, writeQuery: boolean = true) => {
  setLoading(true)

  try {
    // TODO: status filterni massiv qabul qiladigan qilgandan keyin davom ettiriladi
    // const split = value.split('_')
    const { data: list } = await useFetch(`/api/project/customer`, {
      query: {
        ...filters.value
      }
    })

    if (list.value) {
      data.value = list.value
    }

    if (writeQuery) {
      await router.replace({
        path: route.path,
        query: {
          ...query
        }
      })
    }
  } catch (error) {
    console.error(error)
  } finally {
    await sleep()
    setLoading(false)
  }
}

const handleTabClick = async (value: ProjectStatusType) => {
  filters.value = {
    status: value,
    p: 1
  }

  await loadRecentProject(filters.value)
}

onMounted(async () => {
  if (Object.keys(route.query).length) {
    filters.value = {
      status: route.query.status as ProjectStatusType,
      p: parseInt(route.query.p as string)
    }

    await loadRecentProject(filters.value)
    return
  }

  await loadRecentProject(filters.value, false)
})
</script>

<template>
  <div class="recent-jobs-view">
    <div class="flex items-center justify-between mb-5">
      <BaseHeading
        text="Oxirgi loyihalar"
        level="h4"
        weight="semi"
        color="text-(--color-greyscale-900)"
      />

      <ProfileCustomerRecentFilter @emit:change="handleTabClick" />
    </div>

    <div class="space-y-3">
      <template v-if="loading">
        <div class="flex items-center justify-center h-56">
          <UIcon
            name="svg-spinners:90-ring-with-bg"
            class="w-11 h-11 bg-primary-500"
          />
        </div>
      </template>

      <template v-else>
        <template v-if="filters.status === 'draft'">
          <template
            v-for="item in data.results"
            :key="item.id"
          >
            <NuxtLinkLocale
              :to="`/project/show/${item.id}/${item.step}/`"
              class="block"
            >
              <CardProjectItem
                :date="item.updated_at"
                :title="item.title"
                :description="item.profession ?? `To'ldirilmagan`"
                :skills="item.technologies"
                :navigations="navigations(item)"
              />
            </NuxtLinkLocale>
          </template>
        </template>

        <template v-else-if="filters.status === 'announce'">
          <template
            v-for="item in data.results"
            :key="item.id"
          >
            <CardProjectItem
              :date="item.updated_at"
              :title="item.title"
              :description="item.profession ?? `To'ldirilmagan`"
              :skills="item.technologies"
              :navigations="navigations(item)"
            />
          </template>
        </template>

        <template v-else>
          <!-- <CardProjectItem :navigations="navigations(item)" /> -->
        </template>
      </template>
    </div>
  </div>
</template>
