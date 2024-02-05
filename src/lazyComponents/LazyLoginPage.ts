import { lazy } from "react";

const LazyLoginPage = lazy(() => import("../pages/LoginPage"));

export default LazyLoginPage;
