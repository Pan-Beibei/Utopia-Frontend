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
  height: 95vh;
  object-fit: cover;
  display: ${(props) => (props.$isvideoLoaded ? "none" : "block")};
`;

const VideoElement = styled.video<{ $webkitPlaysinline: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 95vh;
  object-fit: cover;
  webkit-playsinline: ${(props) =>
    props.$webkitPlaysinline ? "true" : "false"};
`;

const Video = memo(function Video() {
  const [isvideoLoaded, setIsVideoLoaded] = useState(false);
  const isWeChat = /micromessenger/i.test(navigator.userAgent);
  const handleLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <VideoContainer>
      <PlaceholderImage
        src="/video/hero.jpg"
        alt="video placeholder"
        $isvideoLoaded={isvideoLoaded}
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
