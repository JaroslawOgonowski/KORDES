import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

export const VideoWithOverlay = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Dodaj useEffect, żeby nasłuchiwać zakończenia filmu
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener('ended', handleEnded);

    // cleanup
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <Wrapper>
      <StyledVideo ref={videoRef} src={src} playsInline controls />
      {!isPlaying && (
        <Overlay onClick={handlePlay}>
          <PlayIcon />
        </Overlay>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 50px;
  align-self: flex-start;
`;

const BaseVideo = styled.video`
  height: auto;
  max-height: 50vh;
  width: auto;
  max-width: 100%;
  border-radius: 12px;
  object-fit: contain;
  background-color: #000;
`;

const StyledVideo = React.forwardRef((props, ref) => (
  <BaseVideo ref={ref} {...props} />
));

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const PlayIcon = styled(FaPlay)`
  color: white;
  font-size: 48px;

  @media (max-width: 960px) {
    display: none;
  }
`;
 export const Videosbox = styled.div`
 width: 100%  ;
  display: flex;
  justify-content: flex-start;
  align-items: self-start;
  gap: 20px;
  margin-bottom: 10px;
  
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
  `;

export const ImageBox = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;`

  export const ImageInVBox = styled.img`
  height: auto;
  max-height: 50vh;
  width: auto;
  max-width: 100%;
  border-radius: 12px;
  object-fit: contain;
  background-color: #000;
  `