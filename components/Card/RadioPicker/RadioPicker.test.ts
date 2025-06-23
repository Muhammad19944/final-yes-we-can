import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import RadioPicker from './RadioPicker.vue'

const items = [
  {
    value: 'male',
    label: 'Male',
    icon: 'i-heroicons-user'
  },
  {
    value: 'female',
    label: 'Female',
    icon: 'i-heroicons-user-group'
  }
]

describe('RadioPicker', () => {
  it('renders properly with items', async () => {
    const wrapper = await mountSuspended(RadioPicker, {
      props: {
        modelValue: 'male',
        items
      }
    })

    expect(wrapper.findAll('button[type="button"]').length).toBe(items.length)
  })

  it('displays label with icon slot', async () => {
    const wrapper = await mountSuspended(RadioPicker, {
      props: {
        modelValue: 'female',
        items
      }
    })

    const h1 = wrapper.findAll('h1')

    h1.forEach((el, index) => {
      expect(el.text()).toBe(items[index].label)
    })

    const avatar = wrapper.findComponent({ name: 'BaseAvatar' })
    expect(avatar.exists()).toBe(true)
  })

  it('emits update:modelValue when selection changes', async () => {
    const wrapper = await mountSuspended(RadioPicker, {
      props: {
        modelValue: '',
        items
      }
    })

    const radioButtons = wrapper.findAll('button[type="button"]')
    await radioButtons[0].trigger('click')

    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue']![0]).toEqual(['male'])
  })
})
