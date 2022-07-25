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
    foo: {
      control: 'text',
    },
  }
}

const Template: ComponentStory<typeof ExampleComponent> = (args) => <ExampleComponent {...args} />;

export const Component = Template.bind({});
// set default value for props
Component.args = {
  foo: 'bar'
}

// alternate version of same component
export const ComponentAlt = Template.bind({});
ComponentAlt.args = {
  foo: 'baz'
}