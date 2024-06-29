import { RouteWithSuspense } from "@/components";
import {
  AdminGuardLazy,
  AdminLazy,
  AdminUsers,
  AuthLoginLazy,
  NotFoundPageLazy,
  UsersDelete,
  UsersEdit,
} from "@/features";
import { createBrowserRouter } from "react-router-dom";
import { LayoutPortfolioBlog } from "./layouts";
import Portfolio from "@/features/portfolio/portfolio";
import Blog from "@/features/blog/blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteWithSuspense element={LayoutPortfolioBlog} />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
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
    path: "*",
    element: <RouteWithSuspense element={NotFoundPageLazy} />,
  },
]);
