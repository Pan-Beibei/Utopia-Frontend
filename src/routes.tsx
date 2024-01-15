import AppLayout from "./components/AppLayout";
import AccommodationPage from "./pages/AccommodationPage";
import ActivityPage from "./pages/ActivityPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ForumPage from "./pages/ForumPage";
import PostDetail from "./components/Post/PostDetail";
import UserProfilePage from "./pages/UserProfilePage";
import {
  hoemLoader,
  activityLoader,
  forumLoader,
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
        path: "hotel-info",
        element: <AccommodationPage />,
      },
      {
        path: "activity-info",
        element: <ActivityPage />,
        loader: activityLoader,
      },
      {
        path: "forum-page",
        element: <ForumPage />,
        loader: forumLoader,
      },
      {
        path: "post-detail/:postId",
        element: <PostDetail />,
      },
      {
        path: "user-profile-page",
        element: <UserProfilePage />,
      },
      {
        path: "login-page",
        element: <LoginPage />,
      },
    ],
  },
];
