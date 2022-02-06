import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Atoms / Button',
  component: Button,
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  className: ''
};
