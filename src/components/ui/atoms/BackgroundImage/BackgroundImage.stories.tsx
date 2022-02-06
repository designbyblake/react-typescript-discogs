import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BackgroundImage } from './BackgroundImage';

export default {
  title: 'Atoms / BackgroundImage',
  component: BackgroundImage
} as ComponentMeta<typeof BackgroundImage>;

const Template: ComponentStory<typeof BackgroundImage> = (args) => (
  <BackgroundImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  bgImage: ''
};
