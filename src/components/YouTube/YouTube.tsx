import { useState, useEffect, AriaAttributes } from 'react';
// import cn from 'classnames';
// import styles from './YouTube.module.scss';

import { YouTubeList, YouTubeVideoListProps } from 'components/YouTubeList';
import { YouTubePlayer } from 'components/YouTubePlayer';
import { Heading } from 'components/Heading';

export const YouTube = ({ artist, id, videos }: YouTubeProps) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videosArray, setVideosArray] = useState<YouTubeVideoListProps[]>([]);

  useEffect(() => {
    const videoArray: YouTubeVideoListProps[] = [];
    videos.forEach((video) => {
      const newId = video.uri.split('?v=');
      if (!newId[1]) {
        return;
      }
      const videoObject: YouTubeVideoListProps = {
        title: video.title,
        uri: `https://www.youtube.com/embed/${newId[1]}`
      };
      videoArray.push(videoObject);
    });
    setVideosArray(videoArray);
  }, [videos]);

  return (
    <>
      <Heading>{artist}</Heading>

      <YouTubePlayer
        video={videosArray[currentVideo]}
        key={`${id}-video-${currentVideo}`}
      />

      <YouTubeList
        videos={videosArray}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
    </>
  );
};

YouTube.displayName = 'YouTube';
type YouTubeVideosProps = {
  description: string;
  duration: number;
  title: string;
  uri: string;
};

export type YouTubeProps = {
  artist: string;
  id: string;
  videos: YouTubeVideosProps[];
} & AriaAttributes;
