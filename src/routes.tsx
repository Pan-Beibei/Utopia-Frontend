import AppLayout from "./components/AppLayout";
import PeripheralProductsPage from "./pages/PeripheralProductsPage";
import TouristAttractionsPage from "./pages/TouristAttractionsPage";
import HotelPage from "./pages/HotelPage";
import MemberLoginPage from "./pages/MemberLoginPage";
import ActivityPage from "./pages/ActivityPage";
import Home from "./pages/HomePage";
import DailyPage from "./pages/DailyPage";
import MessagePage from "./pages/MessagePage";
import LoginPage from "./pages/LoginPage";

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: homeLoader,
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
      },
      {
        path: "daily-page",
        element: <DailyPage />,
      },
      {
        path: "message-page",
        element: <MessagePage />,
      },
      {
        path: "login-page",
        element: <LoginPage />,
      },
    ],
  },
];
