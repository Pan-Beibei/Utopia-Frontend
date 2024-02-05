import { lazy } from "react";

const LazyUserProfilePage = lazy(() => import("../pages/UserProfilePage"));

export default LazyUserProfilePage;
