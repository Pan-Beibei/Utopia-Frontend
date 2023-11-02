import { useEffect, useRef } from "react";
// import { io } from "socket.io-client";
import { Outlet } from "react-router-dom";

import Navbar from "./navs/Narbar";
import Footer from "./Footer";
import { initBullet } from "./../features/bullet/bulletSlice";
import store from "../store";
// import { updateToken } from "../features/user/userSlice";
import { HTTPS } from "../utils/APIRoutes";

const MAX_REANDER = 3;

function SpliteBullets(bulletsRef: React.RefObject<never[]>) {
  if (!bulletsRef.current) return;
  let startIndex = 0;
  let endIndex = MAX_REANDER;

  const nIntervId = setInterval(function () {
    if (!bulletsRef.current || bulletsRef.current.length === 0) return;

    // console.log("startIndex, endIndex: ", startIndex, endIndex);

    const arr = bulletsRef.current.slice(startIndex, endIndex);
    // console.log(arr);

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

    // console.log("startIndex, endIndex: ", startIndex, endIndex);
  }, 10000);
}

function AppLayout() {
  const bulletsRef = useRef([]);
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
        bulletsRef.current = data.data;
        SpliteBullets(bulletsRef);
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
