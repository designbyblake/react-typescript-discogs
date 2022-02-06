import { ComponentStory, ComponentMeta } from '@storybook/react';
import { YouTubeButton } from './YouTubeButton';

export default {
  title: 'YouTube /Button',
  component: YouTubeButton,
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof YouTubeButton>;

const Template: ComponentStory<typeof YouTubeButton> = (args) => (
  <YouTubeButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Bad Brains - Band In D.C.',
  className: '',
  isCurrent: false,
  type: 'button'
};
