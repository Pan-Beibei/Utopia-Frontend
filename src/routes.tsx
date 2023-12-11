import AppLayout from "./components/AppLayout";
import PeripheralProductsPage from "./pages/PeripheralProductsPage";
import TouristAttractionsPage from "./pages/TouristAttractionsPage";
import HotelPage from "./pages/HotelPage";
import MemberLoginPage from "./pages/MemberLoginPage";
import ActivityPage from "./pages/ActivityPage";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
import LoginPage from "./pages/LoginPage";
import ForumPage from "./pages/ForumPage";
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
        path: "peripheral-products",
        element: <PeripheralProductsPage />,
      },
      {
        path: "tourist-attractions",
        element: <TouristAttractionsPage />,
      },
      {
        path: "hotel-info",
        element: <HotelPage />,
      },
      {
        path: "member-login",
        element: <MemberLoginPage />,
      },
      {
        path: "activity-info",
        element: <ActivityPage />,
        loader: activityLoader,
      },
      {
        path: "message-page",
        element: <MessagePage />,
      },
      {
        path: "forum-page",
        element: <ForumPage />,
        loader: forumLoader,
      },
      {
        path: "login-page",
        element: <LoginPage />,
      },
    ],
  },
];
