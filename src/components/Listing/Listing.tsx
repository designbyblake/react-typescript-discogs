import { ReactElement, AriaAttributes, HTMLAttributes } from 'react';
import { AlbumCover } from 'components/AlbumCover';
import { Heading, HeadingLevelProps } from 'components/Heading';
import { Button } from 'components/Button';
import { BasicInformation, ArtistsEntity, FormatsEntity } from 'types';
import cn from 'classnames';
import { ListingDetail } from './ListingDetail/ListingDetail';
import styles from './Listing.module.scss';

export const Listing = ({
  className,
  basicInformation,
  ...props
}: ListingProps) => {
  const { title, artists, cover_image: coverImage, formats } = basicInformation;

  const artistName = (theArtists: ArtistsEntity[] | null | undefined) => {
    if (theArtists && theArtists[0]) {
      return theArtists[0].name;
    }
    return '';
  };

  const getFormats = (listingFormats: FormatsEntity[] | null | undefined) => {
    if (listingFormats && listingFormats[0]) {
      const format = listingFormats[0];
      let returnFormat = format.name;

      format.descriptions?.forEach((formatDescription) => {
        returnFormat += `, ${formatDescription}`;
      });

      if (format.text) returnFormat += format.text;

      return returnFormat;
    }

    return '';
  };

  return (
    <article className={cn(styles.root, className)} {...props}>
      <AlbumCover
        alt={`Album cover of ${title} by ${artistName(artists)}`}
        src={coverImage}
      />
      <ListingDetail>
        <Heading data-element='heading'>
          <Button variant='title'>{title}</Button>
        </Heading>
        <p data-element='artist'>{artistName(artists)}</p>

        <p data-element='formats'>{getFormats(formats)}</p>
      </ListingDetail>
    </article>
  );
};

export type ListingProps = {
  basicInformation: BasicInformation;
  className?: string;
  children?: ReactElement | ReactElement[] | string;
} & HeadingLevelProps &
  AriaAttributes &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
