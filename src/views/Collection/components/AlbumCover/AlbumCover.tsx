import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './AlbumCover.module.scss';

export const AlbumCover = ({ alt, src }: AlbumCoverProps) => {
  return (
    <figure className={styles.root} data-testid='album-cover'>
      <LazyLoadImage
        alt={alt}
        effect='blur'
        src={src}
        wrapperClassName='album-cover__wrapper'
        threshold={-50}
      />
    </figure>
  );
};

type AlbumCoverProps = {
  alt: string;
  src: string;
};
