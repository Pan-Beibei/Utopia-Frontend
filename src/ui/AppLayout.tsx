import { Outlet } from "react-router-dom";
import Navbar from "./navs/Narbar";
import Footer from "./Footer";
import { initBullet } from "./../features/bullet/bulletSlice";
import store from "../store/store";
import { HTTPS } from "../utils/APIRoutes";
import useFetchData from "../hooks/useFetchData";

function AppLayout() {
  const { isLoading, error } = useFetchData(HTTPS.BULLETS, null, (data) =>
    store.dispatch(initBullet(data))
  );
  if (isLoading) return "Loading...";
  if (error instanceof Error) return `An error has occurred: ${error.message}`;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AppLayout;
