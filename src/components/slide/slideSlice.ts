import { createSlice, createSelector } from "@reduxjs/toolkit"; //
import { RootState } from "../../store";

export type SlideIndexType = "one" | "two" | "three" | "five";

interface StateProps {
  slideIndex: {
    one: number;
    two: number;
    three: number;
    five: number;
  };
}

const initialState: StateProps = {
  slideIndex: { one: 1, two: 1, three: 1, five: 1 },
};

const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    nextSlide(state, action) {
      state.slideIndex[action.payload as SlideIndexType] += 1;
    },
    previousSlide(state, action) {
      state.slideIndex[action.payload as SlideIndexType] -= 1;
    },
  },
});

export const { nextSlide, previousSlide } = slideSlice.actions;

export default slideSlice.reducer;

export const getSlideIndex = (state: RootState) => state.slide.slideIndex;

export const getSlideIndexByName = createSelector(
  [getSlideIndex, (_, ikey) => ikey],
  (slideIndex, ikey: string) => slideIndex[ikey as SlideIndexType]
);
