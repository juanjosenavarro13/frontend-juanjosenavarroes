import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  Portfolio,
  NotFoundPageLazy,
  GeneralLoading,
  AuthLoginLazy,
  AdminGuardLazy,
  AdminLazy,
} from "@/features";

export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <Portfolio />,
    errorElement: <GeneralLoading />,
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <AuthLoginLazy />
      </Suspense>
    ),
    errorElement: <GeneralLoading />,
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<GeneralLoading />}>
        <AdminGuardLazy />
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
