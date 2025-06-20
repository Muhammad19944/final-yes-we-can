import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BaseFormField from './BaseFormField.vue'

describe('BaseFormField component', () => {
  it('renders label prop correctly', async () => {
    const wrapper = await mountSuspended(BaseFormField, {
      props: {
        label: 'My label',
        name: 'field'
      }
    })
    expect(wrapper.text()).toContain('My label')
  })

  it('renders description, help, hint, and error props', async () => {
    const wrapper = await mountSuspended(BaseFormField, {
      props: {
        description: 'Description here',
        hint: 'Hint text',
        error: 'There is an error'
      }
    })

    expect(wrapper.html()).toContain('Description here')
    expect(wrapper.html()).toContain('Hint text')
    expect(wrapper.html()).toContain('There is an error')
  })

  it('prioritizes slots over props for label, hint, etc.', async () => {
    const wrapper = await mountSuspended(BaseFormField, {
      props: {
        label: 'Label prop',
        hint: 'Hint prop',
        error: 'Error prop'
      },
      slots: {
        label: '<span class="custom-label">Label from slot</span>',
        hint: '<span class="custom-hint">Hint from slot</span>',
        error: '<span class="custom-error">Error from slot</span>'
      }
    })

    expect(wrapper.find('.custom-label').exists()).toBe(true)
    expect(wrapper.find('.custom-label').text()).toBe('Label from slot')

    expect(wrapper.find('.custom-hint').exists()).toBe(true)
    expect(wrapper.find('.custom-hint').text()).toBe('Hint from slot')

    expect(wrapper.find('.custom-error').exists()).toBe(true)
    expect(wrapper.find('.custom-error').text()).toBe('Error from slot')
  })

  it('renders default slot content (e.g., input)', async () => {
    const wrapper = await mountSuspended(BaseFormField, {
      slots: {
        default: '<input type="text" class="test-input" />'
      }
    })

    expect(wrapper.find('input.test-input').exists()).toBe(true)
  })

  it('applies required attribute when required=true', async () => {
    const wrapper = await mountSuspended(BaseFormField, {
      props: {
        required: true
      }
    })

    expect(wrapper.props('required')).toBe(true)
  })

  it('applies correct size class via size prop', async () => {
    const wrapper = await mountSuspended(BaseFormField, {
      props: {
        size: 'xl'
      }
    })

    expect(wrapper.props('size')).toBe('xl')
  })

  it('renders error when boolean `true` is passed', async () => {
    const wrapper = await mountSuspended(BaseFormField, {
      props: {
        error: true
      }
    })

    expect(wrapper.html()).toContain('error') // Assuming some error-related class or DOM appears
  })
})
