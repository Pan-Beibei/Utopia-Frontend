import { lazy } from "react";

const LazyPostPage = lazy(() => import("../pages/PostPage"));

export default LazyPostPage;
