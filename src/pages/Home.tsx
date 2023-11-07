import { ReactNode, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { Box } from "@mui/system";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import Hero from "../components/Hero";
import Drinks from "../components/Drinks";
import OurMemories from "../components/OurMemories";
import BulletInputText from "../features/bullet/BulletInputText";

import { SERVER_ADDRESS, MsgType } from "./../utils/APIRoutes";
import { addBullet } from "../features/bullet/bulletSlice";
import { setUserId } from "../features/user/userSlice";
import store from "../store/store";

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

function Home() {
  const socketRef = useRef<Socket | null>(null);
  useEffect(function () {
    async function addUser() {
      //Send User Id
      const fp = await FingerprintJS.load();
      const { visitorId } = await fp.get();
      // console.log("visitorId: ", visitorId);
      if (visitorId) {
        setUserId(visitorId);
        socketRef.current = io(SERVER_ADDRESS.host, {
          reconnection: false, //!!!!!!!!!!!!!!!!!!!! No  reconnection
        });
        socketRef.current.emit(MsgType.ADD_USER, visitorId);
        store.dispatch(setUserId(visitorId));

        socketRef.current.on(MsgType.REV_BULLET, (data) => {
          console.log(data);
          store.dispatch(addBullet(data));
        });
      }

      return () => {
        if (socketRef.current) {
          console.log("Close connection");

          socketRef.current.close();
        }
      };
    }

    addUser();
  }, []);

  return (
    <StyledHome>
      <FlexColumn>
        <Hero />
        <BulletInputText socket={socketRef} />
      </FlexColumn>

      <Drinks />
      <OurMemories />
    </StyledHome>
  );
}

export default Home;
