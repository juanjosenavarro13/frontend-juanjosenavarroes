import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePageLazy, HomePageLoading } from "./features/home";
import { NotFoundPageLazy } from "./features/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<HomePageLoading />}>
        <HomePageLazy />
      </Suspense>
    ),
    errorElement: <NotFoundPageLazy />,
  },
]);
