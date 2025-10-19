<script lang="ts">
import { useAccountStore } from '~/stores/account'
import { useProjectStore } from '~/stores/Projects'
import { formatCurrency } from '~/utils'
</script>

<script setup lang="ts">
const accountStore = useAccountStore()
const projectStore = useProjectStore()

const isCanPayment = computed(() => parseFloat(accountStore.account.info?.balance as string) >= parseFloat(projectStore.projectRequest?.price as string))
</script>

<template>
  <CardProjectSheet title="To’lov">
    <BaseAlert
      color="neutral"
      trailing
      icon="solar:dollar-bold-duotone"
      action-orientation="horizontal"
      :ui="{
        container: '!py-3 !px-4',
        icon: `${!isCanPayment ? 'size-[74px]' : 'size-9'} text-(--color-warning-500)`
      }"
      rounded="xl"
    >
      <template #title>
        <div class="flex items-center gap-2">
          <BaseHeading
            text="Sizning balansingiz:"
            weight="normal"
            color="text-[var(--color-greyscale-600)]"
          />
          <BaseHeading
            :text="`${formatCurrency(parseFloat(accountStore.account.info?.balance as string))} so'm`"
            weight="semi"
            color="text-[var(--color-greyscale-900)]"
          />
        </div>

        <template v-if="!isCanPayment">
          <BaseHeading
            text="Loyihani e’lon qilish uchun sizda mablag’ yetarli emas!"
            weight="medium"
            color="text-[var(--color-critic-500)]"
            :ui="{
              root: 'mt-1 mb-3'
            }"
          />

          <div>
            <BaseButton
              primary-gradient
              variant="solid"
            >
              Balansni to'ldirish
            </BaseButton>
          </div>
        </template>
      </template>
    </BaseAlert>
  </CardProjectSheet>
</template>
