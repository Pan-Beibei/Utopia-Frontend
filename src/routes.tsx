import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";

import LazyForumPage from "./lazyComponents/LazyForumPage";
import LazyPostPage from "./lazyComponents/LazyPostPage";
import LazyUserProfilePage from "./lazyComponents/LazyUserProfilePage";
import LazyLoginPage from "./lazyComponents/LazyLoginPage";
import LazyActivityPage from "./lazyComponents/LazyActivityPage";

import {
  hoemLoader,
  activityLoader,
  // forumLoader,
} from "./services/dataLoaders";

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: hoemLoader,
      },
      {
        path: "activity-page",
        element: <LazyActivityPage />,
        loader: activityLoader,
      },
      {
        path: "forum-page",
        element: <LazyForumPage />,
        // loader: forumLoader,
      },
      {
        path: "post-detail/:postId",
        element: <LazyPostPage />,
      },
      {
        path: "user-profile-page",
        element: <LazyUserProfilePage />,
      },
      {
        path: "login-page",
        element: <LazyLoginPage />,
      },
    ],
  },
];
