import { configureStore } from "@reduxjs/toolkit";
import slideSlice from "../components/slide/slideSlice";
import BulletSlice from "../components/bullet/bulletSlice";
import userSlice from "../services/state/userSlice";
import reviewSlice from "../services/state/reviewSlice";
import postSlice from "../services/state/postSlice";

import homePageSlice from "../services/state/homePageSlice";
import activityPageSlice from "../services/state/activityPageSlice";
import forumPageSlice from "../services/state/ForumPageSlice";

const store = configureStore({
  reducer: {
    slide: slideSlice,
    bullet: BulletSlice,
    user: userSlice,
    review: reviewSlice,
    post: postSlice,
    homePage: homePageSlice,
    activityPage: activityPageSlice,
    forumPage: forumPageSlice,
  },
});

export default store;

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
