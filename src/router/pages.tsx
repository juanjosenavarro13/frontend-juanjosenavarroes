import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/home/home-page"));
export const NotFoundPage = lazy(
  () => import("../pages/not-found/not-found-page"),
);
