import { ComponentStory } from '@storybook/react';
import { ExampleComponent } from './example';

export default {
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
  }
}

const Template: ComponentStory<typeof ExampleComponent> = (args) => <ExampleComponent {...args} />;

export const Component = Template.bind({});
// set default value for props
Component.args = {
  text: 'bar'
}

// alternate version of same component
export const ComponentAlt = Template.bind({});
ComponentAlt.args = {
  text: 'baz'
}