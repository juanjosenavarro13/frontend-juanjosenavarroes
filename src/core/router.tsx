import { RouteWithSuspense } from "@/components";
import {
  AdminGuardLazy,
  AdminLazy,
  AuthLoginLazy,
  NotFoundPageLazy,
  PortfolioLazy,
  AdminUsers,
  UsersEdit,
  UsersDelete,
  BlogLazy,
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
      {
        path: "users/edit/:id",
        element: <UsersEdit />,
      },
      {
        path: "users/delete/:id",
        element: <UsersDelete />,
      },
    ],
  },
  {
    path: "/blog",
    element: <RouteWithSuspense element={BlogLazy} />,
  },
  {
    path: "*",
    element: <RouteWithSuspense element={NotFoundPageLazy} />,
  },
]);
