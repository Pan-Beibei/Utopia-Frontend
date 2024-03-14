import { lazy } from "react";

const LazyDrinks = lazy(() => import("../pages/HomePage/Drinks"));

export default LazyDrinks;
