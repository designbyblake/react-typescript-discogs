import { ComponentStory, ComponentMeta } from '@storybook/react';
import { YouTube } from './YouTube';

export default {
  title: 'YouTube / YouTube',
  component: YouTube
} as ComponentMeta<typeof YouTube>;

const Template: ComponentStory<typeof YouTube> = (args) => (
  <div style={{ maxWidth: '500px' }}>
    <YouTube {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  artist: ' Beastie Boys',
  id: 'bb-22',
  videos: [
    {
      description: 'Description 1',
      duration: 244,
      title: 'Beastie Boys - Pass the Mic (Official Music Video)',
      uri: 'https://www.youtube.com/watch?v=NpsvBvwRuf0'
    },
    {
      description: 'Description 2',
      duration: 244,
      title: 'Funky Boss (Remastered 2009)',
      uri: 'https://www.youtube.com/watch?v=3eg6ozF6qOE'
    },
    {
      description: 'Description 3',
      duration: 244,
      title: "Beastie Boys - So What'Cha Want",
      uri: 'https://www.youtube.com/watch?v=ru3gH27Fn6E'
    }
  ]
};
