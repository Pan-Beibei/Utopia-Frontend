// import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { TextProvider } from "./contexts/TextContext";

import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
// import Loading from "./ui/Loading";
import PeripheralProductsPage from "./pages/PeripheralProductsPage";
import TouristAttractionsPage from "./pages/TouristAttractionsPage";
import HotelPage from "./pages/HotelPage";
import MemberLoginPage from "./pages/MemberLoginPage";
import ActivityPage from "./pages/ActivityPage";
import Home from "./pages/Home";

// const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error />,
    // loader: AppLoader,
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
    ],
  },
]);

function App() {
  return (
    <TextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </TextProvider>
  );
}

export default App;
