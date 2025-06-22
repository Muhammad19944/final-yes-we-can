import { h } from 'vue'
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BaseFormRadioGroup from './BaseFormRadioGroup.vue'

describe('BaseFormRadioGroup', () => {
  const items = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' }
  ]

  it('renders all radio options correctly', async () => {
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: {
        items,
        modelValue: 'a'
      }
    })

    const radioItems = wrapper.html().match(/<button[^>]*type="button"[^>]*>/g) || []
    expect(radioItems.length).toBe(3)
  })

  it('emits update:modelValue when a radio is selected', async () => {
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: {
        items,
        modelValue: 'a'
      }
    })

    const secondOption = wrapper.findAll('button[type="button"]')[1]
    await secondOption.trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b'])
  })

  it('emits change event when radio is changed', async () => {
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: {
        items,
        modelValue: 'a'
      }
    })

    // Manually trigger change event to simulate internal emit
    const thirdOption = wrapper.findAll('button[type="button"]')[2]
    await thirdOption.trigger('change')

    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('applies custom size and variant classes', async () => {
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: {
        items,
        size: 'lg',
        variant: 'card'
      }
    })

    // You may adjust class checks depending on your UI library rendering
    expect(wrapper.html()).toContain('lg')
  })

  it('renders legend if provided', async () => {
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: {
        items,
        legend: 'Choose an option'
      }
    })

    expect(wrapper.text()).toContain('Choose an option')
  })

  it('disables all options when disabled prop is true', async () => {
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: {
        items,
        disabled: true
      }
    })

    const inputs = wrapper.findAll('button[type="button"]')
    inputs.forEach((input) => {
      expect((input.element as HTMLInputElement).disabled).toBe(true)
    })
  })

  it('renders custom legend slot', async () => {
    const text = 'Custom Legend'
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: { items },
      slots: {
        legend: () => h('span', text)
      }
    })

    expect(wrapper.html()).toContain(text)
  })

  it('renders custom label slot', async () => {
    const text = 'Custom Label'
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: { items },
      slots: {
        label: () => h('span', text)
      }
    })

    expect(wrapper.html()).toContain(text)
  })

  it('renders custom description slot', async () => {
    const text = 'Custom Description'
    const wrapper = await mountSuspended(BaseFormRadioGroup, {
      props: { items },
      slots: {
        description: () => h('div', text)
      }
    })

    expect(wrapper.html()).toContain(text)
  })
})
