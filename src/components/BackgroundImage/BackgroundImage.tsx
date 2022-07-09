import background from 'assets/images/background-1.jpeg';
import styles from './BackgroundImage.module.scss';

export const BackgroundImage = ({ bgImage }: BackgroundImageProps) => {
  return (
    <div className={styles.bg} data-testid='background-image'>
      <div className={styles['bg-overlay']} />
      <div
        className={styles['bg-image']}
        style={{ backgroundImage: `url(${bgImage || background})` }}
      />
    </div>
  );
};

export type BackgroundImageProps = {
  bgImage?: string;
};
