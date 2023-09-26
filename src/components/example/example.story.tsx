import type { Meta, StoryObj } from '@storybook/react'
import { ExampleComponent } from './example.component'

const meta: Meta<typeof ExampleComponent> = {
  title: 'Components/Example',
  component: ExampleComponent,
  parameters: {
    // centered | fullscreen | padded (default)
    layout: 'centered',
  },
  // https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    }
  },
  args: {
    text: 'foo'
  }
}

export default meta

export const Example: StoryObj<typeof ExampleComponent> = {}