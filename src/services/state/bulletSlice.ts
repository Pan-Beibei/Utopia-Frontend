// import { useMemo } from "react";
import { createSlice } from "@reduxjs/toolkit"; //createSelector
import { RootState } from "../../store";
import { FixedLengthArray } from "../../store/types";

export enum BulletStatusType {
  WAIT = "wait",
  MOVE = "move",
  PASUE = "pasue",
  END = "end",
}

export interface BulletProps {
  id: string;
  msg: string;
  track: number;
}

export interface ServerBulletProps {
  id: string;
  msg: string;
}
const NUM_TRACKS = 5; // 定义轨道数量
interface StateProps {
  bullets: Array<BulletProps>;
  tracks: FixedLengthArray<boolean, typeof NUM_TRACKS>;
}

const initialState: StateProps = {
  bullets: [],
  tracks: [false, false, false, false, false],
};

const idSet: Set<string> = new Set();

const bulletSlice = createSlice({
  name: "bullet",
  initialState,
  reducers: {
    initBullet(state, action) {
      const newBullets = [];
      for (let i = 0; i < action.payload.length; i++) {
        if (idSet.has(action.payload[i]._id)) continue;
        idSet.add(action.payload[i]._id);
        newBullets.push(action.payload[i]);
      }

      //No new data return
      if (newBullets.length === 0) return;
      state.bullets.push(...newBullets);
    },
    addBullet(state, action) {
      console.log("addBullet", action.payload);

      state.bullets.unshift(action.payload);
    },
    removeBullet(state, action) {
      const index = state.bullets.findIndex((el) => el.id === action.payload);
      if (index !== -1) {
        state.bullets.splice(index, 1);
      }
    },
    releaseTrack(state, action) {
      state.tracks[action.payload] = false;
    },
    occupyTrack(state, action) {
      state.tracks[action.payload] = true;
    },
  },
});

export const {
  initBullet,
  removeBullet,
  addBullet,
  releaseTrack,
  occupyTrack,
} = bulletSlice.actions;

export default bulletSlice.reducer;

export const getBullets = (state: RootState) => state.bullet.bullets;

export const getSomeBullets = (state: RootState, count: number) => {
  return state.bullet.bullets.slice(0, count);
};

export const getFreeTrack = (state: RootState) => {
  const index = state.bullet.tracks.findIndex((track) => !track);
  return index !== -1 ? index : -1;
};
