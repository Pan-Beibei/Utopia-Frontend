import { Outlet } from "react-router-dom";
import Navbar from "./navs/Narbar";
import Footer from "./footer/Footer";

function AppLayout() {
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
