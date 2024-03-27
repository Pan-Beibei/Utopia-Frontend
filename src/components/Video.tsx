import styled, { css } from "styled-components";
import { useState, memo } from "react";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const sharedStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 95vh;
  object-fit: cover;
`;

const PlaceholderImage = styled.img<{ $isvideoLoaded: boolean }>`
  ${sharedStyles}
  display: ${(props) => (props.$isvideoLoaded ? "none" : "block")};
`;

const VideoElement = styled.video<{ $webkitPlaysinline: boolean }>`
  ${sharedStyles}
  webkit-playsinline: ${(props) =>
    props.$webkitPlaysinline ? "true" : "false"};
`;

const Video = memo(function Video() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isWeChat = /micromessenger/i.test(navigator.userAgent);

  const handleLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <VideoContainer>
      <PlaceholderImage
        srcSet="/video/hero.webp 480w, /video/hero.webp 800w, /video/hero.jpg 1200w"
        sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
        src="/video/hero.jpg"
        $isvideoLoaded={isVideoLoaded}
      />

      {!isWeChat && (
        <VideoElement
          onLoadedData={handleLoadedData}
          muted
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          $webkitPlaysinline={true}
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </VideoElement>
      )}
    </VideoContainer>
  );
});

export default Video;
