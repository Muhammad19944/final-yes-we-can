import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BaseHeading from './BaseHeading.vue'

type level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'
type weight = 'normal' | 'medium' | 'semi' | 'bold' | 'extra'

it('renders default heading with text', async () => {
  const wrapper = await mountSuspended(BaseHeading, {
    props: {
      text: 'Default Heading'
    }
  })

  expect(wrapper.text()).toBe('Default Heading')
  expect(wrapper.classes()).toContain('text-sm')
  expect(wrapper.classes()).toContain('font-normal')
})

it('applies all heading levels correctly', async () => {
  const levels = {
    h1: 'text-[56px]',
    h2: 'text-4xl',
    h3: 'text-[28px]',
    h4: 'text-2xl',
    h5: 'text-[22px]',
    h6: 'text-xl',
    h7: 'text-lg',
    h8: 'text-base',
    h9: 'text-sm'
  }

  for (const [level, expectedClass] of Object.entries(levels)) {
    const wrapper = await mountSuspended(BaseHeading, {
      props: {
        text: `Heading ${level}`,
        level: level as level
      }
    })

    expect(wrapper.classes()).toContain(expectedClass)
  }
})

it('applies weight classes correctly', async () => {
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semi: 'font-semibold',
    bold: 'font-bold',
    extra: 'font-extrabold'
  }

  for (const [weight, expectedClass] of Object.entries(weights)) {
    const wrapper = await mountSuspended(BaseHeading, {
      props: {
        text: `Weight ${weight}`,
        weight: weight as weight
      }
    })
    expect(wrapper.classes()).toContain(expectedClass)
  }
})
