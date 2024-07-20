import { UserStore } from "@/features/auth/store/user/store-user";
import NotFoundPage from "@/features/not-found/not-found-page";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { lazy } from "react";

const DevTools = lazy(() => import("@/core/components/devtools/devtools"));

interface MyRouterContext {
  user: UserStore | undefined;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      {import.meta.env.DEV && <DevTools />}
    </>
  ),
  notFoundComponent: NotFoundPage,
});
