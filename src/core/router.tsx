import { RouteWithSuspense } from "@/components";
import {
  AdminGuardLazy,
  AdminLazy,
  AuthLoginLazy,
  NotFoundPageLazy,
  PortfolioLazy,
  AdminUsers,
} from "@/features";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <RouteWithSuspense element={PortfolioLazy} />,
  },
  {
    path: "/auth",
    element: <RouteWithSuspense element={AuthLoginLazy} />,
  },
  {
    path: "/admin",
    element: <RouteWithSuspense element={AdminGuardLazy} />,
    children: [
      {
        index: true,
        element: <RouteWithSuspense element={AdminLazy} />,
      },
      {
        path: "users",
        element: <AdminUsers />,
      },
    ],
  },
  {
    path: "*",
    element: <RouteWithSuspense element={NotFoundPageLazy} />,
  },
]);
