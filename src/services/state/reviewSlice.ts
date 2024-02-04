import { createSlice } from "@reduxjs/toolkit"; //
// import { RootState } from "../../store";

interface RecviewProps {
  review: string;
  createdAt: string;
}

interface StateProps {
  reviews: Array<RecviewProps>;
}

const initialState: StateProps = {
  reviews: [],
};

const userSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    init(state, action) {
      state.reviews = action.payload;
    },
    addReview(state, action) {
      state.reviews.push(action.payload);
    },
  },
});

export const { init, addReview } = userSlice.actions;

export default userSlice.reducer;

// export const getReviews = (state: RootState) => state.review.reviews;

// export const getSlideIndexByName = createSelector(
//   [getSlideIndex, (_, ikey) => ikey],
//   (slideIndex, ikey: string) => slideIndex[ikey as SlideIndexType]
// );
