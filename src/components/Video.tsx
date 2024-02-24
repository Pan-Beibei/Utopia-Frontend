import styled from "styled-components";
import { useState, memo } from "react";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const PlaceholderImage = styled.img<{ $isvideoLoaded: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  object-fit: cover;
  display: ${(props) => (props.$isvideoLoaded ? "none" : "block")};
`;

const VideoElement = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 95vh;
  object-fit: cover;
`;

const Video = memo(function Video() {
  const [isvideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <VideoContainer>
      <PlaceholderImage
        src="/video/hero-placehoder.webp"
        alt="video placeholder"
        $isvideoLoaded={isvideoLoaded}
      />
      <VideoElement
        onLoadedData={handleLoadedData}
        muted
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        // preload="metadata"
      >
        <source src="/video/hero.webm" type="video/webm" />
      </VideoElement>
    </VideoContainer>
  );
});

export default Video;
