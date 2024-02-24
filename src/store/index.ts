import { configureStore } from "@reduxjs/toolkit";
import BulletSlice from "../services/state/bulletSlice";
import userSlice from "../services/state/userSlice";
import homePageSlice from "../services/state/homePageSlice";
import activityPageSlice from "../services/state/activityPageSlice";
import commentSlice from "../services/state/commentSlice";
import forumSlice from "../services/state/ForumSlice";
import globalSlice from "../services/state/globalSlice";

const store = configureStore({
  reducer: {
    global: globalSlice,
    user: userSlice,
    bullet: BulletSlice,
    homePage: homePageSlice,
    activityPage: activityPageSlice,
    comment: commentSlice,
    forum: forumSlice,
  },
});

export default store;

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
