<script setup lang="ts">
const freelancePrice = ref('')
</script>

<template>
  <div class="proposal-my-slug-view">
    <div class="flex justify-center gap-6 my-14">
      <div class="max-w-[966px] w-full">
        <WidgetProjectProposal
          v-model:freelance-price="freelancePrice"
          label="Taklif ma’lumotlari"
          title="Mobile app dizayn chizish"
          profession="Biz veb-ilovamizdagi kredit tarixi bo'limimizni yaxshilash uchun UI/UX dizaynerini qidirmoqdamiz. Sizning vazifangiz uni ishlatishni osonlashtirish, qarashni yoqimli qilish va barcha kerakli ma'lumotlarni bir joyda to'plashini ta'minlashdir. Talablar: - Ilgari bunday ishni qilgan va bizga ko'rsatishi mumkin."
          price="9000000"
          level="middle"
          :technologies="[
            { id: 1, name: 'Web Design' },
            { id: 2, name: 'User Interface Design' },
            { id: 3, name: 'UX & UI' },
            { id: 4, name: 'UX Research' }
          ]"
        />
      </div>

      <div class="max-w-[310px] w-full">
        <BaseHeading
          level="h3"
          text="Hidden text"
          weight="semi"
          color="text-(--color-greyscale-900)"
          :ui="{
            root: 'opacity-0 mb-4'
          }"
        />

        asddas
      </div>
    </div>
  </div>
</template>
