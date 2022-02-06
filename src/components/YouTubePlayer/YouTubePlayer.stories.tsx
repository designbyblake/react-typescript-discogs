import { ComponentStory, ComponentMeta } from '@storybook/react';
import { YouTubePlayer } from './YouTubePlayer';

export default {
  title: 'YouTube / Player',
  component: YouTubePlayer
} as ComponentMeta<typeof YouTubePlayer>;

const Template: ComponentStory<typeof YouTubePlayer> = (args) => (
  <YouTubePlayer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  video: {
    uri: 'https://www.youtube.com/embed/NpsvBvwRuf0',
    title: 'Beastie Boys - Pass the Mic (Official Music Video)'
  }
};
