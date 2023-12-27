import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store/store";

interface StateProps {
  userId: string;
}

const initialState: StateProps = {
  userId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;

export const getUserId = (state: RootState) => state.user.userId;

// export const getSlideIndexByName = createSelector(
//   [getSlideIndex, (_, ikey) => ikey],
//   (slideIndex, ikey: string) => slideIndex[ikey as SlideIndexType]
// );
