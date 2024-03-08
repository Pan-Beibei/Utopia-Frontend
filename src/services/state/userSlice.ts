import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store";
import { User } from "../../types";

interface StateProps {
  user: User | null;
  notificationCount: number;
}

const initialState: StateProps = {
  user: null,
  notificationCount: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clearUser(state, _action) {
      state.user = null;
    },
    setNotificationCount(state, action) {
      state.notificationCount = action.payload;
    },
    resetNotificationCount(state) {
      state.notificationCount = 0;
    },
  },
});

export const {
  setUser,
  clearUser,
  setNotificationCount,
  resetNotificationCount,
} = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: RootState) => state.user.user;

export const getNotificationCount = (state: RootState) =>
  state.user.notificationCount;
