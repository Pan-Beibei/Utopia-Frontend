import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../store/store";

interface StateProps {
  pictures: Array<string>;
  textContents: Array<string>;
}

const initialState: StateProps = {
  pictures: [],
  textContents: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    init(state, action) {
      state.pictures = action.payload[0].pictures;
      const textContents = JSON.parse(action.payload[0].textContents);
      state.textContents = textContents.map(
        (el: { [key: string]: string }) => el.src
      );
    },
  },
});

export const { init } = homePageSlice.actions;

export default homePageSlice.reducer;

export const getPictures = (state: RootState) => state.homePage.pictures;

export const getTextContents = (state: RootState) =>
  state.homePage.textContents;

// export const getSlideIndexByName = createSelector(
//   [getSlideIndex, (_, ikey) => ikey],
//   (slideIndex, ikey: string) => slideIndex[ikey as SlideIndexType]
// );
