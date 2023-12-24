import styled from "styled-components";
import Video from "../../ui/Video";
import BulletShow from "../../features/bullet/BulletShow";
import BulletInputBox from "../../features/bullet/BulletInputBox";
import { useSocket } from "../../hooks/useSocket";

const StyledHero = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

const StyledBulletContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 10rem;
  overflow: hidden;
  z-index: 2;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const StyledInputContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 11rem;
`;

function Hero() {
  const socketRef = useSocket();

  return (
    <StyledHero>
      <StyledBulletContainer>
        <BulletShow />
        <StyledInputContainer>
          <BulletInputBox socket={socketRef} />
        </StyledInputContainer>
      </StyledBulletContainer>
      <VideoContainer>
        <Video />
      </VideoContainer>
    </StyledHero>
  );
}

export default Hero;
