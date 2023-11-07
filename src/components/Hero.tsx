import { Box } from "@mui/system";
import styled from "styled-components";

import Video from "../ui/Video";
import BulletShow from "../features/bullet/BulletShow";
import { ReactNode } from "react";

const StyledHero = ({ children }: { children?: ReactNode }) => (
  <Box
    component="section"
    sx={{
      position: "relative",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      overflow: "hidden",
    }}
  >
    {children}
  </Box>
);

const StyledBulletContainer = styled(Box)`
  height: 100%;
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 10rem;
  overflow: hidden;
  z-index: 2;
`;

const VideoContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

function Hero() {
  return (
    <StyledHero>
      <StyledBulletContainer>
        <BulletShow />
      </StyledBulletContainer>
      <VideoContainer>
        <Video />
      </VideoContainer>
    </StyledHero>
  );
}

export default Hero;
