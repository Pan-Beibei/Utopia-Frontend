import { Box } from "@mui/system";

import Video from "../ui/Video";
import BulletShow from "../features/bullet/BulletShow";
import { ReactNode } from "react";

// const StyledHero = styled.section`
//   height: 100dvh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
// `;

const StyledHero = ({ children }: { children?: ReactNode }) => (
  <Box
    component="section"
    sx={{
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

function Hero() {
  return (
    <StyledHero>
      <BulletShow />
      <Video isAutoPlay={true} isControls={false} isLoop={true} />
    </StyledHero>
  );
}

export default Hero;
