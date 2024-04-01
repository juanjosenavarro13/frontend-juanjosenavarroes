import { AdminLazy } from "@/features/admin";
import { AdminGuard } from "@/features/admin/admin-guard";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { GeneralLoading } from "../features/loading";
import { NotFoundPageLazy } from "../features/not-found";
import { PortfolioLazy } from "../features/portfolio";

export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <PortfolioLazy />
      </Suspense>
    ),
    errorElement: <GeneralLoading />,
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <AdminGuard />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<GeneralLoading />}>
            <AdminLazy />
          </Suspense>
        ),
        errorElement: <GeneralLoading />,
      },
    ],
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
