<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const link = ref('npx nuxt module add ui')

const { copy, copied } = useClipboard()

const copyLink = (link: string) => {
  copy(link)
}
</script>

<template>
  <BaseSheet
    :ui="{
      root: 'p-5'
    }"
  >
    <div class="flex gap-3">
      <UIcon
        name="solar:bolt-bold"
        size="20"
        class="text-(--color-green-500)"
      />

      <div class="space-y-0.5 -mt-0.75">
        <BaseHeading
          text="Bog’lanishlar"
          level="h8"
          weight="medium"
          :ui="{
            root: 'text-(--color-greyscale-900)'
          }"
        />

        <div class="flex items-center gap-1">
          <BaseHeading
            text="Ish uchun talab qilinadi:"
            weight="medium"
            :ui="{
              root: 'text-(--color-greyscale-500)'
            }"
          />

          <BaseHeading
            text="1 ta"
            weight="medium"
            :ui="{
              root: 'text-(--color-greyscale-900)'
            }"
          />
        </div>

        <div class="flex items-center gap-1">
          <BaseHeading
            text="Sizda mavjud:"
            weight="medium"
            :ui="{
              root: 'text-(--color-greyscale-500)'
            }"
          />

          <BaseHeading
            text="55 ta"
            weight="medium"
            :ui="{
              root: 'text-(--color-greyscale-900)'
            }"
          />
        </div>
      </div>
    </div>

    <BaseSeparator
      :container="false"
      :ui="{
        root: 'my-4'
      }"
    />

    <div class="flex gap-3">
      <UIcon
        name="solar:user-circle-bold"
        size="20"
        class="text-(--color-green-500)"
      />

      <div class="flex-1 space-y-2 -mt-0.75">
        <BaseHeading
          text="Mijoz haqida"
          level="h8"
          weight="medium"
          :ui="{
            root: 'text-(--color-greyscale-900)'
          }"
        />

        <div class="space-y-3">
          <BaseAvatarLabeled
            size="lg"
            label="Abdullayev Farhod"
            src="https://github.com/benjamincanac.png"
            :ui="{
              root: 'items-center justify-between',
              avatar: 'order-1'
            }"
          >
            <template #subLabel>
              <BaseHeading
                text="Andijon sh, Andijon vil."
                weight="medium"
                :ui="{
                  root: 'text-(--color-greyscale-500)'
                }"
              />
            </template>
          </BaseAvatarLabeled>

          <div>
            <div class="flex items-center gap-2">
              <BaseHeading
                text="12-apr, 2025 13:30"
                weight="medium"
                :ui="{
                  root: 'text-(--color-greyscale-900)'
                }"
              />

              <BaseTooltip text="Mijozning oxirgi sitemaga kirgan vaqti">
                <UIcon
                  name="solar:question-circle-bold"
                  size="20"
                  class="text-(--color-greyscale-300) hover:text-(--color-green-500)"
                />
              </BaseTooltip>
            </div>

            <BaseHeading
              text="Oxirgi faollik"
              weight="medium"
              :ui="{
                root: 'text-(--color-greyscale-500)'
              }"
            />
          </div>

          <div>
            <div class="flex items-center gap-1">
              <UIcon
                name="solar:verified-check-bold"
                size="20"
                class="text-(--color-info-500)"
              />

              <BaseHeading
                text="Tasdiqlangan"
                weight="medium"
                :ui="{
                  root: 'text-(--color-greyscale-900) mr-1'
                }"
              />

              <BaseTooltip text="Bu loyiha uchun mijoz tomonidan to'lov tasdiqlangan! Mablag' platforma tomonidan xavfsiz saqlanmoqda va ish muvaffaqiyatli tugaganidan so'ng frilanserga o'tkaziladi">
                <UIcon
                  name="solar:question-circle-bold"
                  size="20"
                  class="text-(--color-greyscale-300) hover:text-(--color-green-500)"
                />
              </BaseTooltip>
            </div>

            <BaseHeading
              text="To’lov holati"
              weight="medium"
              :ui="{
                root: 'text-(--color-greyscale-500)'
              }"
            />
          </div>

          <div>
            <BaseHeading
              text="25 ta ish e’lon qilgan"
              weight="medium"
              :ui="{
                root: 'text-(--color-greyscale-900)'
              }"
            />

            <BaseHeading
              text="1 ta ish ochiq, 19 ta jarayonda"
              weight="medium"
              :ui="{
                root: 'text-(--color-greyscale-500)'
              }"
            />
          </div>

          <div>
            <BaseHeading
              text="139 050 000 UZS "
              weight="medium"
              :ui="{
                root: 'text-(--color-greyscale-900)'
              }"
            />

            <BaseHeading
              text="Jami sarflagan"
              weight="medium"
              :ui="{
                root: 'text-(--color-greyscale-500)'
              }"
            />
          </div>

          <div>
            <BaseHeading
              text="8-aprel 2021-yil"
              weight="medium"
              :ui="{
                root: 'text-(--color-greyscale-900)'
              }"
            />

            <BaseHeading
              text="Sanasida ro’yxtdan o’tgan"
              weight="medium"
              :ui="{
                root: 'text-(--color-greyscale-500)'
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <BaseSeparator
      :container="false"
      :ui="{
        root: 'my-4'
      }"
    />

    <div class="flex gap-3 mb-3">
      <UIcon
        name="solar:link-circle-bold"
        size="20"
        class="text-(--color-green-500)"
      />

      <div class="-mt-0.75">
        <BaseHeading
          text="Ish linki"
          level="h8"
          weight="medium"
          :ui="{
            root: 'text-(--color-greyscale-900)'
          }"
        />
      </div>
    </div>

    <BaseFormInput
      :value="link"
      readonly
      size="2xl"
      :ui="{
        root: 'w-full'
      }"
    >
      <template #trailing>
        <BaseTooltip text="Copy to clipboard">
          <BaseButton
            :color="copied ? 'success' : 'neutral'"
            variant="link"
            :icon="copied ? 'solar:check-square-bold' : 'solar:copy-bold'"
            :ui="{
              leadingIcon: [copied ? 'text-(--color-green-500)' : 'text-(--color-greyscale-400)']
            }"
            @click="copyLink(link)"
          />
        </BaseTooltip>
      </template>
    </BaseFormInput>
  </BaseSheet>
</template>
