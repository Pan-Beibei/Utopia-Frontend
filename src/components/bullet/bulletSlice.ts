// import { useMemo } from "react";
import { createSlice } from "@reduxjs/toolkit"; //createSelector
import { RootState } from "../../store/store";
import { generateBulletStyle } from "../../utils/generateBulletStyle";
import { FixedLengthArray } from "../../store/types";

export enum BulletStatusType {
  WAIT = "wait",
  MOVE = "move",
  PASUE = "pasue",
  END = "end",
}

export interface BulletProps {
  id: string;
  text: string;
  fontSize: number;
  fontColor: string;
  speed: number;
  track: number;
}

export interface ServerBulletProps {
  _id: string;
  userId: string;
  bulletText: string;
  bulletCreateAt: string;
}
const NUM_TRACKS = 5 as const; // 定义轨道数量
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

      const arr = generateBulletStyle(newBullets);

      state.bullets.push(...arr);
    },
    addBullet(state, action) {
      const bull: ServerBulletProps = {
        _id: action.payload._id,
        bulletText: action.payload.msg,
        userId: "",
        bulletCreateAt: "",
      };
      const arr = generateBulletStyle([bull]);
      state.bullets.unshift(...arr);
    },
    removeBullet(state, action) {
      const index = state.bullets.findIndex((el) => el.id === action.payload);
      if (index !== -1) {
        state.bullets.splice(index, 1);
      }
    },
    removeBullets(state, action) {
      //保存到删除数组，等待删除
      const arr = [];
      for (let i = 0; i < action.payload.length; i++) {
        arr.push(action.payload[i].id);
      }

      const removeBulletsSet = new Set(arr);
      if (removeBulletsSet.size > 0) {
        state.bullets = state.bullets.filter(
          (el) => !removeBulletsSet.has(el.id)
        );
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
  removeBullets,
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
