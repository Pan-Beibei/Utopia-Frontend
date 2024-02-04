import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { io, Socket } from "socket.io-client";
import { SERVER_ADDRESS, MsgType } from "../config";
import { addBullet } from "../services/state/bulletSlice";

export function useSocket() {
  const socketRef = useRef<Socket | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    socketRef.current = io(SERVER_ADDRESS, {
      reconnection: true, //!!!!!!!!!!!!!!!!!!!! No  reconnection
    });

    socketRef.current.on(MsgType.REV_BULLET, (data) => {
      console.log(data);
      dispatch(addBullet(data));
    });

    return () => {
      if (socketRef.current) {
        console.log("Close connection");

        socketRef.current.close();
      }
    };
  }, [dispatch]);

  return socketRef;
}
