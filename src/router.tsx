import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePageLazy } from "./features/home";
import { GeneralLoading } from "./features/loading";
import { NotFoundPageLazy } from "./features/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <HomePageLazy />
      </Suspense>
    ),
    errorElement: <GeneralLoading />,
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <NotFoundPageLazy />
      </Suspense>
    ),
    errorElement: <GeneralLoading />,
  },
]);
