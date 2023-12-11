import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../store/store";

interface StateProps {
  dailies: Array<DailyProps>;
}

interface DailyProps {
  title: string;
  content: string;
  pictures: Array<string>;
  videoUrl: string;
  dailyCreatedAt: string;
}

const initialState: StateProps = {
  dailies: [],
};

const dailyPageSlice = createSlice({
  name: "dailyPage",
  initialState,
  reducers: {
    initDailyPage(state, action) {
      state.dailies = action.payload;
    },
  },
});

export const { initDailyPage } = dailyPageSlice.actions;

export default dailyPageSlice.reducer;

export const getDailies = (state: RootState) => state.dailyPage.dailies;
