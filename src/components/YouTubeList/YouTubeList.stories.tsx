import { ComponentStory, ComponentMeta } from '@storybook/react';
import { YouTubeList } from './YouTubeList';

export default {
  title: 'YouTube / List',
  component: YouTubeList
} as ComponentMeta<typeof YouTubeList>;

const Template: ComponentStory<typeof YouTubeList> = (args) => (
  <YouTubeList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  videos: [
    {
      title: 'Beastie Boys - Pass the Mic (Official Music Video)',
      uri: 'https://www.youtube.com/watch?v=NpsvBvwRuf0'
    },
    {
      title: 'Funky Boss (Remastered 2009)',
      uri: 'https://www.youtube.com/watch?v=3eg6ozF6qOE'
    },
    {
      title: "Beastie Boys - So What'Cha Want",
      uri: 'https://www.youtube.com/watch?v=ru3gH27Fn6E'
    }
  ]
};
