import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store";
import { User } from "../../types";

interface StateProps {
  user: User | null;
}

const initialState: StateProps = {
  user: null,
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
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: RootState) => state.user.user;
