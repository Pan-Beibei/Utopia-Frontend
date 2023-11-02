import { useEffect, useRef, useCallback } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./navs/Narbar";
import Footer from "./Footer";
import { initBullet } from "./../features/bullet/bulletSlice";
import store from "../store";
import { HTTPS } from "../utils/APIRoutes";

const MAX_REANDER = 3;

function AppLayout() {
  const bulletsRef = useRef([]);

  const SpliteBullets = useCallback(() => {
    if (!bulletsRef.current) return;

    let startIndex = 0;
    let endIndex = MAX_REANDER;

    const nIntervId = setInterval(function () {
      try {
        if (!bulletsRef.current || bulletsRef.current.length === 0) return;

        const arr = bulletsRef.current.slice(startIndex, endIndex);

        store.dispatch(initBullet(arr));
        startIndex = endIndex;

        if (endIndex === bulletsRef.current.length) {
          clearInterval(nIntervId);
          return;
        }

        if (bulletsRef.current.length - endIndex >= MAX_REANDER) {
          endIndex += MAX_REANDER;
        } else {
          endIndex = bulletsRef.current.length;
        }
      } catch (err) {
        console.error(err);
        clearInterval(nIntervId);
      }
    }, 10000);
    return () => clearInterval(nIntervId);
  }, []);

  useEffect(
    function () {
      async function getAllBullets() {
        //Get All bullets
        try {
          const res = await fetch(HTTPS.BULLETS);
          if (!res.ok) {
            throw new Error(`Error! status: ${res.status}`);
          }
          const data = await res.json();
          console.log(data);
          bulletsRef.current = data;

          SpliteBullets();
        } catch (err) {
          console.log(err);
        }
      }

      getAllBullets();
    },
    [SpliteBullets]
  );

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
