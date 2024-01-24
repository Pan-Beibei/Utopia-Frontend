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
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const getUser = (state: RootState) => state.user.user;

// export const getSlideIndexByName = createSelector(
//   [getSlideIndex, (_, ikey) => ikey],
//   (slideIndex, ikey: string) => slideIndex[ikey as SlideIndexType]
// );
