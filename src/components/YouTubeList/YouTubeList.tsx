import { Button } from 'components/Button';
import styles from './YouTubeList.module.scss';

export const YouTubeList = ({
  videos,
  currentVideo,
  setCurrentVideo
}: YouTubeListProps) => (
  <ul className={styles['video-list']}>
    {videos.map((video, index) => (
      <li key={`album-video-${index}`}>
        <Button
          data-style='youtube'
          data-is-current={currentVideo === index}
          aria-pressed={currentVideo === index}
          onClick={() => setCurrentVideo(index)}
        >
          {video.title}
        </Button>
      </li>
    ))}
  </ul>
);

export type YouTubeVideoListProps = {
  title: string;
  uri: string;
};

export type YouTubeListProps = {
  videos: YouTubeVideoListProps[];
  currentVideo: number;
  setCurrentVideo: (number: number) => void;
};
