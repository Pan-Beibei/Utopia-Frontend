import { ReactNode } from "react";

import { Box } from "@mui/system";

import Hero from "../components/home/Hero";
import Drinks from "../components/home/Drinks";
import OurMemories from "../components/home/OurMemories";
import BulletInputText from "../features/bullet/BulletInputText";
import { useSocket } from "../hooks/useSocket";
import useFetchData from "../hooks/useFetchData";
import { init } from "../pageSlices/homePageSlice";
import store from "../store/store";
import { HTTPS } from "../utils/APIRoutes";
// import Guests from "../components/Guests";

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
//filter={"age":{"$gt":20}}
function HomePage() {
  const socketRef = useSocket();
  const { isLoading } = useFetchData(
    HTTPS.HOME_PAGE,
    { title: "Home" },
    (data) => store.dispatch(init(data))
  );

  if (isLoading) return "Loading...";

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
