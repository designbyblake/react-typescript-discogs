import { YouTubeButton } from 'components/YouTubeButton';
import styles from './YouTubeList.module.scss';

export const YouTubeList = ({ videos, currentVideo }: YouTubeListProps) => (
  <ul className={styles['video-list']}>
    {videos.map((video, index) => (
      <li key={`album-video-${index}`}>
        <YouTubeButton onClick={() => currentVideo(index)}>
          {video.title}
        </YouTubeButton>
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
  currentVideo: (number: number) => void;
};
