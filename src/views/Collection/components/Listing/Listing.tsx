import { ReactElement, AriaAttributes, HTMLAttributes } from 'react';
import { AlbumCover } from 'views/Collection/components/AlbumCover';
import { Heading, HeadingLevelProps } from 'components/Heading';
import { Button } from 'components/Button';
import { IBasicInformation } from 'types';
import cn from 'classnames';
import { artistName, getFormats } from './utils';
import { ListingDetail } from './ListingDetail/ListingDetail';
import styles from './Listing.module.scss';

export const Listing = ({
  className,
  basicInformation,
  ...props
}: ListingProps) => {
  const { title, artists, cover_image: coverImage, formats } = basicInformation;

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
  basicInformation: IBasicInformation;
  className?: string;
  children?: ReactElement | ReactElement[] | string;
} & HeadingLevelProps &
  AriaAttributes &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
