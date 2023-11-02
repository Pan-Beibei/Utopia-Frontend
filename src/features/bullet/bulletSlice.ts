// import { useMemo } from "react";
import { createSlice } from "@reduxjs/toolkit"; //createSelector
import { RootState } from "../../store";
import { generateBulletStyle } from "./../../utils/generateBulletStyle";
// import { RootState } from "../../store";

export enum BulletStatusType {
  WAIT = "wait",
  MOVE = "move",
  PASUE = "pasue",
  END = "end",
}

export interface BulletProps {
  id: string;
  text: string;
  fontSize: string;
  fontColor: string;
  // status: BulletStatusType;
  speed: number;
  posY: number;
}

export interface ServerBulletProps {
  _id: string;
  userId: string;
  bulletText: string;
  bulletCreateAt: string;
}

interface StateProps {
  bullets: Array<BulletProps>;
}

const initialState: StateProps = {
  bullets: [],
};

const idsArr: Array<string> = [];

const bulletSlice = createSlice({
  name: "bullet",
  initialState,
  reducers: {
    initBullet(state, action) {
      let isNew = false;
      for (let i = 0; i < action.payload.length; i++) {
        if (idsArr.includes(action.payload[i]._id)) continue;
        idsArr.push(action.payload[i]._id);
        isNew = true;
      }

      //No new data return
      if (!isNew) return;

      const arr = generateBulletStyle(
        action.payload as Array<ServerBulletProps>
      );

      state.bullets.push(...arr);
    },
    addBullet(state, action) {
      const bull: ServerBulletProps = {
        _id: "",
        bulletText: action.payload,
        userId: "",
        bulletCreateAt: "",
      };
      const arr = generateBulletStyle([bull]);
      state.bullets.push(...arr);
    },
    deleteBullet(state, action) {
      state.bullets = state.bullets.filter((el) => el.id !== action.payload);
      console.log("state.bullets: ", state.bullets);
    },
  },
});

export const { initBullet, deleteBullet, addBullet } = bulletSlice.actions;

export default bulletSlice.reducer;

export const getBullets = (state: RootState) => state.bullet.bullets;
