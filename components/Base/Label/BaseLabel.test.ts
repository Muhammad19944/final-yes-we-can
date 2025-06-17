import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BaseLabel from './BaseLabel.vue'

it('renders label text', async () => {
  const wrapper = await mountSuspended(BaseLabel, {
    props: {
      text: 'Label text'
    }
  })

  expect(wrapper.text()).toBe('Label text')
  expect(wrapper.classes()).toContain('text-base')
  expect(wrapper.classes()).toContain('text-greyscale-900')
})
