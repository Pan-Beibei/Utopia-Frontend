import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./navs/Narbar";
import Footer from "./Footer";
import { initBullet } from "./../features/bullet/bulletSlice";
import store from "../store/store";
import { HTTPS } from "../utils/APIRoutes";

function AppLayout() {
  useEffect(function () {
    async function getAllBullets() {
      //Get All bullets
      try {
        const res = await fetch(HTTPS.BULLETS);
        if (!res.ok) {
          throw new Error(`Error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        // bulletsRef.current = data;
        store.dispatch(initBullet(data));
        // SpliteBullets();
      } catch (err) {
        console.log(err);
      }
    }

    getAllBullets();
  }, []);

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
