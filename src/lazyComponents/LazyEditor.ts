import { lazy } from "react";

const LazyEditor = lazy(() =>
  import("beibei-lexical-editor").then((module) => ({ default: module.App }))
);

export default LazyEditor;
