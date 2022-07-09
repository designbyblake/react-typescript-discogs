import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './Header';

export default {
  title: 'Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <Header>
    <Navigation />
  </Header>
);

export const Default = Template.bind({});
// Default.args = {};
Default.parameters = {
  layout: 'fullscreen'
};
