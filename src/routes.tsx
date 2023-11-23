import AppLayout from "./ui/AppLayout";
import PeripheralProductsPage from "./pages/PeripheralProductsPage";
import TouristAttractionsPage from "./pages/TouristAttractionsPage";
import HotelPage from "./pages/HotelPage";
import MemberLoginPage from "./pages/MemberLoginPage";
import ActivityPage from "./pages/ActivityPage";
import Home from "./pages/HomePage";
import DailyPage from "./pages/DailyPage";
import MessagePage from "./pages/MessagePage";

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
    ],
  },
];
