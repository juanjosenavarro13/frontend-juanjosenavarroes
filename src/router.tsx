import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { GeneralLoading } from "./features/loading";
import { NotFoundPageLazy } from "./features/not-found";
import { PortfolioLazy } from "./features/portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <PortfolioLazy />
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
