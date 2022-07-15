import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlbumCover } from './AlbumCover';

export default {
  title: 'AlbumCover',
  component: AlbumCover
} as ComponentMeta<typeof AlbumCover>;

const Template: ComponentStory<typeof AlbumCover> = (args) => (
  <div style={{ maxWidth: '320px' }}>
    <AlbumCover {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  alt: 'Album cover of Bad Brains by Bad Brains',
  src: 'https://i.discogs.com/3j1Hgc34XUAYVE7BWoUU0no2zKgOPbKzCU-xO2KO_r4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTEz/NzQ5MzktMTUyMzcx/NTA2NC03ODUwLmpw/ZWc.jpeg'
};
