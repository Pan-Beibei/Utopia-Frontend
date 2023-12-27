import { createSlice } from "@reduxjs/toolkit"; //
import { RootState } from "../../store/store";

interface StateProps {
  posts: Array<PostProps>;
}

interface PostProps {
  title: string;
  content: string;
  pictures: Array<string>;
  videoUrl: string;
  dailyCreatedAt: string;
}

const initialState: StateProps = {
  posts: [],
};

const forumPageSlice = createSlice({
  name: "forumPage",
  initialState,
  reducers: {
    initForumPage(state, action) {
      state.posts = action.payload;
    },
  },
});

export const { initForumPage } = forumPageSlice.actions;

export default forumPageSlice.reducer;

export const getPosts = (state: RootState) => state.forumPage.posts;
