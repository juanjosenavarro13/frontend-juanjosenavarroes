import { AdminLazy } from "@/features/admin";
import { AdminGuard } from "@/features/admin/admin-guard";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { GeneralLoading } from "../features/loading";
import { NotFoundPageLazy } from "../features/not-found";
import { PortfolioLazy } from "../features/portfolio";
import { AuthGuardLazy, AuthLoginLazy } from "@/features/auth";

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
    path: "/auth",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <AuthGuardLazy />
      </Suspense>
    ),
    errorElement: <GeneralLoading />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<GeneralLoading />}>
            <AuthLoginLazy />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <AdminGuard />
      </Suspense>
    ),
    errorElement: <GeneralLoading />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<GeneralLoading />}>
            <AdminLazy />
          </Suspense>
        ),
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
