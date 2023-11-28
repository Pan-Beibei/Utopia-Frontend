import { configureStore } from "@reduxjs/toolkit";
import slideSlice from "../features/slide/slideSlice";
import BulletSlice from "../features/bullet/bulletSlice";
import userSlice from "../features/user/userSlice";
import reviewSlice from "../features/review/reviewSlice";
import homePageSlice from "../pageSlices/homePageSlice";
import activityPageSlice from "../pageSlices/activityPageSlice";
import dailyPageSlice from "../pageSlices/dailyPageSlice";

const store = configureStore({
  reducer: {
    slide: slideSlice,
    bullet: BulletSlice,
    user: userSlice,
    review: reviewSlice,
    homePage: homePageSlice,
    activityPage: activityPageSlice,
    dailyPage: dailyPageSlice,
  },
});

export default store;

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
