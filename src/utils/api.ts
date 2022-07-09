export const api = {
  token: process.env.REACT_APP_TOKEN,
  username: 'designbyblake',
  noAuth: '&key=XrkJNIPwCiPgddPIWUbM&secret=XDLuYdixEQmQqBFGeZKdeeGDgbxFWtJT',
  perPage: 250,
  sort: 'artist',
  order: 'asc',
  key: process.env.REACT_APP_KEY,
  secret: process.env.REACT_APP_SECRET
};

export function loadCollection(fetchURL: string) {
  // var fetchUrl = `https://api.discogs.com/database/search?q=Nirvana&token=${api.token}`;

  return fetch(fetchURL)
    .then((res) => res.json())
    .then((collection) => {
      if (collection.message) {
        throw new Error('error');
      }

      return collection;
    });
}

// export function loadArtistInfo(artist_id) {
//   return fetch(`https://api.discogs.com/artists/${artist_id}?${api.token}`)
//     .then((res) => res.json())
//     .then((artist) => {
//       if (artist.message) {
//         throw new Error('error');
//       }
//       return artist;
//     });
// }

// export function loadAlbumInfo(resource_url: string) {
//   return fetch(`${resource_url}?${api.token}`)
//     .then((res) => res.json())
//     .then((album) => {
//       if (album.message) {
//         throw new Error(artist.message);
//       }
//       return album;
//     });
// }
