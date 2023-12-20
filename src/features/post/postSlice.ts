import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface PostProps {
  title: string;
  content: string;
  pictures: Array<string>;
  tags: Array<string>;
  videoUrl: string;
  author: string;
  createdAt: string;
  commentCount: number;
}

interface StateProps {
  posts: Array<PostProps>;
}

const initialState: StateProps = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { setUserId } = postSlice.actions;

export default postSlice.reducer;

export const getPosts = (state: RootState) => state.post.posts;

// export const getSlideIndexByName = createSelector(
//   [getSlideIndex, (_, ikey) => ikey],
//   (slideIndex, ikey: string) => slideIndex[ikey as SlideIndexType]
// );
