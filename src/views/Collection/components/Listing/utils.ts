import { ArtistsEntity, FormatsEntity } from 'types';

export const artistName = (theArtists: ArtistsEntity[] | null | undefined) => {
  if (theArtists && theArtists[0]) {
    return theArtists[0].name;
  }
  return '';
};

export const getFormats = (
  listingFormats: FormatsEntity[] | null | undefined
) => {
  if (listingFormats && listingFormats[0]) {
    const format = listingFormats[0];
    let returnFormat = format.name;

    format.descriptions?.forEach((formatDescription) => {
      returnFormat += `, ${formatDescription}`;
    });

    if (format.text) return `${returnFormat} ${format.text}`;

    return returnFormat;
  }

  return '';
};
