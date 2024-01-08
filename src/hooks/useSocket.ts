import { useRef } from "react";
import { io, Socket } from "socket.io-client";
import { SERVER_ADDRESS, MsgType } from "../config";
import { addBullet } from "../components/bullet/bulletSlice";
import store from "../store/store";
import { useAsyncEffect } from "./customHooks";

export function useSocket() {
  const socketRef = useRef<Socket | null>(null);

  useAsyncEffect(async () => {
    socketRef.current = io(SERVER_ADDRESS, {
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
  });

  return socketRef;
}
