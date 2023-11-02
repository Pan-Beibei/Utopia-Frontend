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

// const StyledTextDiv = styled.p`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   font-size: 2rem;
//   color: white;
//   text-align: center;
//   transform: translate(-50%, 5%);
// `;

function Hero() {
  return (
    <StyledHero>
      <BulletShow />
      <Video isAutoPlay={true} isControls={false} isLoop={true} />
      {/* <StyledTextDiv>
        一个几乎24小时营业的灵魂寄居所 --- 六元咖啡馆
      </StyledTextDiv> */}
    </StyledHero>
  );
}

export default Hero;
