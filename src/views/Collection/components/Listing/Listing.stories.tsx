import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Listing } from './Listing';

export default {
  title: 'Listing',
  component: Listing
} as ComponentMeta<typeof Listing>;

const Template: ComponentStory<typeof Listing> = (args) => {
  return (
    <div style={{ maxWidth: '360px' }}>
      <Listing {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  basicInformation: {
    id: 1374939,
    master_id: 25074,
    master_url: 'https://api.discogs.com/masters/25074',
    resource_url: 'https://api.discogs.com/releases/1374939',
    thumb:
      'https://i.discogs.com/gHCsub4Kc9FE0kWEZhnwdvQ0tq86AVkxMz1PKutm5Pc/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNzQ5/MzktMTUyMzcxNTA2/NC03ODUwLmpwZWc.jpeg',
    cover_image:
      'https://i.discogs.com/C1ArdEONS7CxSZAOoMLZ1cP0Dmd2rVvb0bEOTF2aOaQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNzQ5/MzktMTUyMzcxNTA2/NC03ODUwLmpwZWc.jpeg',
    title: 'Bad Brains',
    year: 1997,
    formats: [
      {
        name: 'Vinyl',
        qty: '1',
        descriptions: ['LP', 'Album', 'Reissue', 'Remastered']
      }
    ],
    labels: [
      {
        name: 'ROIR',
        catno: 'RUSLP 8223',
        entity_type: '1',
        entity_type_name: 'Label',
        id: 18316,
        resource_url: 'https://api.discogs.com/labels/18316'
      }
    ],
    artists: [
      {
        name: 'Bad Brains',
        anv: '',
        join: '',
        role: '',
        tracks: '',
        id: 251561,
        resource_url: 'https://api.discogs.com/artists/251561'
      }
    ],
    genres: ['Rock', 'Reggae'],
    styles: ['Reggae', 'Hardcore', 'Punk']
  }
};
