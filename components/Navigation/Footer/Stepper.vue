<script lang="ts">
interface FooterStepperEntity {
  progress?: number
  progressShow?: boolean
  prev?: {
    text?: string
    disabled?: boolean
  }
  next?: {
    text?: string
    disabled?: boolean
    loading?: boolean
  }
  ui?: {
    content?: string | string[]
  }
}
</script>

<script setup lang="ts">
withDefaults(defineProps<FooterStepperEntity>(), {
  prev: () => ({
    text: 'Ortga'
  })
})

const emit = defineEmits(['emit:prev', 'emit:next'])
</script>

<template>
  <footer
    class="bg-white w-full sticky bottom-0"
    :class="{ 'border-t border-t-greyscale-200': !progressShow }"
  >
    <div class="relative">
      <template v-if="progressShow">
        <BaseProgress
          :model-value="progress"
          size="sm"
          :max="5"
        />
      </template>

      <div
        class="w-full mx-auto"
        :class="[ui?.content]"
      >
        <div class="flex items-center justify-between h-16">
          <BaseButton
            :label="prev?.text"
            icon="solar:alt-arrow-left-outline"
            color="greyscale"
            size="lg"
            :disabled="prev?.disabled"
            :ui="{
              base: 'cursor-pointer'
            }"
            @click="emit('emit:prev')"
          />

          <slot name="next">
            <BaseButton
              type="submit"
              :label="next?.text"
              icon="solar:alt-arrow-right-outline"
              color="gradient"
              size="lg"
              trailing
              :disabled="next?.disabled"
              :loading="next?.loading"
              :ui="{
                base: 'cursor-pointer'
              }"
              @click="emit('emit:next')"
            />
          </slot>
        </div>
      </div>
    </div>
  </footer>
</template>
