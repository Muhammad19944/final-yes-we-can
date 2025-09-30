import type { ProjectSizeType, ProjectDurationType, ProjectLevelType, ProjectType } from '~/shared/types/project'

interface ProjectMetaEntity<T> {
  id: string
  label: string
  hint?: string
  value: T
}

export const useProjectMeta = () => {
  const size = ref<ProjectMetaEntity<ProjectSizeType>[]>([
    {
      id: 'small',
      label: 'Kichik',
      hint: 'Tez va sodda vazifalar (masalan, veb-sahifadagi matn va rasmlarni yangilash)',
      value: 'small'
    },

    {
      id: 'medium',
      label: `O'rta`,
      hint: 'Yaxshi belgilangan loyihalar (masalan, ochilish sahifasi)',
      value: 'medium'
    },
    {
      id: 'large',
      label: 'Katta',
      hint: "Uzoq muddatli yoki murakkab tashabusslar (masalan: to'liq veb-saytni loyihalash va yaratish)",
      value: 'large'
    }
  ])
  const duration = ref<ProjectMetaEntity<ProjectDurationType>[]>([
    {
      id: 'one_to_three',
      label: '1 oydan 3 oygacha',
      value: 'one_to_three'
    },
    {
      id: 'three_to_six',
      label: '3 oydan 6 oygacha',
      value: 'three_to_six'
    },
    {
      id: 'more_than_six',
      label: '6 oydan ortiq',
      value: 'more_than_six'
    }
  ])
  const level = ref<ProjectMetaEntity<ProjectLevelType>[]>([
    {
      id: 'junior',
      label: 'Boshlang`ich (Junior)',
      hint: 'Bu sohada nisbatan yangi mutaxassis',
      value: 'junior'
    },
    {
      id: 'middle',
      label: "O'rta daraja (Middle)",
      hint: "Bu sohada katta tajribaga ega, o'rta darajadagi loyihalarni bajargan",
      value: 'middle'
    },
    {
      id: 'senior',
      label: 'Mutaxassis (Senior)',
      hint: 'Ushbu sohada keng qamrovli va chuqur tajribaga ega',
      value: 'senior'
    },
    {
      id: 'expert',
      label: 'Expert (Expert)',
      hint: "O'z ishining ustasi, professional",
      value: 'expert'
    }
  ])
  const type = ref<ProjectMetaEntity<ProjectType>[]>([
    {
      id: 'salary',
      label: "Ha, bu to'liq vaqtga aylanishi mumkin",
      hint: "Sinov muddatidan so'ng siz shartnomani konvertatsiya qilish uchun bir martalik to'lovni to'lashingiz mumkin\"",
      value: 'salary'
    },
    {
      id: 'contract',
      label: "Yo'q, hozir emas (Bir martalik)",
      hint: 'Yoq, xozir emas',
      value: 'contract'
    }
  ])

  const currentLevel = (value: ProjectLevelType) => {
    return level.value.find((item) => item.value === value)
  }

  return {
    size,
    duration,
    level,
    type,
    currentLevel
  }
}
