import { forwardRef } from 'react';
import styles from './YouTubePlayer.module.scss';

export const YouTubePlayer = forwardRef<HTMLIFrameElement, YouTubePlayerProps>(
  ({ video }: YouTubePlayerProps, ref) => {
    return (
      <div className={styles.player} data-testid='youtube-player'>
        <figure className={styles.responsive}>
          {video?.uri && (
            <iframe
              src={video.uri}
              title={`${video.title}`}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              ref={ref}
            />
          )}
        </figure>
      </div>
    );
  }
);

YouTubePlayer.displayName = 'YouTubePlayer';

export type YouTubePlayerProps = {
  video: {
    uri: string;
    title: string;
  };
};
