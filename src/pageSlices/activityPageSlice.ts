import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../store/store";

interface StateProps {
  activities: Array<ActivityProps>;
  activity: ActivityProps;
}

export interface ActivityProps {
  id: string;
  activityTime: string;
  title: string;
  activityType: string;
  content: string;
  promotionalVideo: string;
  pictures: Array<string>;
}

const initialState: StateProps = {
  activities: [],
  activity: {
    id: "",
    activityTime: "",
    title: "",
    activityType: "",
    content: "",
    promotionalVideo: "",
    pictures: [],
  },
};

const activityPageSlice = createSlice({
  name: "activityPage",
  initialState,
  reducers: {
    initActivities(state, action) {
      console.log(action.payload);
      state.activities = action.payload;
      state.activity = state.activities[0];
    },
    setActivity(state, action) {
      state.activity = action.payload;
    },
  },
});

export const { initActivities, setActivity } = activityPageSlice.actions;

export default activityPageSlice.reducer;

export const getActivities = (state: RootState) =>
  state.activityPage.activities;

export const getShowActivity = (state: RootState) =>
  state.activityPage.activity;
