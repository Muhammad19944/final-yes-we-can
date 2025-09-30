<script setup lang="ts">
const editToggle = inject('editToggle')
</script>

<template>
  <div class="divide-y divide-(--color-greyscale-200)">
    <div class="p-6">
      <CardProjectDescription
        title="Mobil ilova, Web va Dashboard dizayni"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, fuga? Iusto suscipit corporis dignissimos veritatis similique laborum adipisci ut impedit eius voluptates dolore consequatur, doloribus accusamus delectus ullam atque ratione?"
        :card="false"
      >
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit />
          </template>
        </template>
      </CardProjectDescription>
    </div>

    <div class="p-6">
      <CardProjectPortfolio
        title="Portfolio"
        :card="false"
      >
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit
              icon="heroicons:plus-16-solid"
              :tooltip="{ text: `Yangi qo'shish`, show: true }"
            />
          </template>
        </template>
      </CardProjectPortfolio>
    </div>

    <div class="p-6">
      <CardProjectSkills
        title="Qobiliyatlar"
        :card="false"
        :skills="[
          { id: 1, name: 'Web Design' },
          { id: 2, name: 'User Interface Design' },
          { id: 3, name: 'UX & UI' },
          { id: 4, name: 'UX Research' }
        ]"
      >
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit />
          </template>
        </template>
      </CardProjectSkills>
    </div>

    <div class="p-6">
      <CardProjectHistory title="Loyihalar tarixi" />
    </div>

    <div class="p-6">
      <CardProjectFeedback title="Mijoz firklari" />
    </div>

    <div class="p-6">
      <CardProjectCertificates title="Sertifikatlar">
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit
              icon="heroicons:plus-16-solid"
              :tooltip="{ text: `Yangi qo'shish`, show: true }"
            />
          </template>
        </template>
      </CardProjectCertificates>
    </div>

    <div class="p-6">
      <CardProjectExperience title="Ish tajribasi">
        <template #actions>
          <template v-if="editToggle">
            <ButtonEdit />
          </template>
        </template>
      </CardProjectExperience>
    </div>
  </div>
</template>
