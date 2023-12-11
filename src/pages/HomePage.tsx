import { ReactNode } from "react";

import { Box } from "@mui/system";

import Hero from "../components/home/Hero";
import Drinks from "../components/home/Drinks";
import OurMemories from "../components/home/OurMemories";
import BulletInputText from "../features/bullet/BulletInputText";
import { useSocket } from "../hooks/useSocket";

const StyledHome = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "5rem",
      backgroundColor: "background.default",
    }}
  >
    {children}
  </Box>
);

const FlexColumn = ({ children }: { children?: ReactNode }) => (
  <Box
    sx={{
      gap: "2rem",
      width: "100%",
    }}
  >
    {children}
  </Box>
);
function HomePage() {
  const socketRef = useSocket();

  return (
    <StyledHome>
      <FlexColumn>
        <Hero />
        <BulletInputText socket={socketRef} />
      </FlexColumn>

      <Drinks />
      <OurMemories />
      {/* <Guests /> */}
    </StyledHome>
  );
}

export default HomePage;
