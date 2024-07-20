import { UserStore } from "@/features/auth/store/user/store-user";
import NotFoundPage from "@/features/not-found/not-found-page";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface MyRouterContext {
  user: UserStore | undefined;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      {import.meta.env.DEV && (
        <TanStackRouterDevtools position="bottom-left" initialIsOpen={false} />
      )}
    </>
  ),
  notFoundComponent: NotFoundPage,
});
