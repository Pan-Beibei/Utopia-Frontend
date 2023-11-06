import styled from "styled-components";

import Video from "../ui/Video";
import BulletShow from "../features/bullet/BulletShow";

const StyledHero = styled.section`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // position: relative;
  overflow: hidden;
`;

function Hero() {
  return (
    <StyledHero>
      <BulletShow />
      <Video isAutoPlay={true} isControls={false} isLoop={true} />
    </StyledHero>
  );
}

export default Hero;
