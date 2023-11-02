import { memo } from "react";
import styled from "styled-components";

const StyledVideo = styled.div`
  // width: 250;
  // height: 50%;
`;

interface VideoProps {
  isControls: boolean;
  isLoop: boolean;
  isAutoPlay: boolean;
}

const Video = memo(function Video({
  isControls,
  isAutoPlay,
  isLoop,
}: VideoProps) {
  return (
    <StyledVideo>
      <video
        muted
        autoPlay={isAutoPlay}
        loop={isLoop}
        controls={isControls}
        playsInline
      >
        <source src="/video/hero.webm" type="video/webm" />
      </video>
    </StyledVideo>
  );
});

export default Video;
