import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { SERVER_ADDRESS, MsgType } from "../utils/APIRoutes";
import { addBullet } from "../features/bullet/bulletSlice";
import store from "../store/store";

export function useSocket() {
  const socketRef = useRef<Socket | null>(null);

  useEffect(function () {
    async function initSocket() {
      socketRef.current = io(SERVER_ADDRESS.host, {
        reconnection: false, //!!!!!!!!!!!!!!!!!!!! No  reconnection
      });

      socketRef.current.on(MsgType.REV_BULLET, (data) => {
        console.log(data);
        store.dispatch(addBullet(data));
      });

      return () => {
        if (socketRef.current) {
          console.log("Close connection");

          socketRef.current.close();
        }
      };
    }

    initSocket();
  }, []);

  return socketRef;
}
