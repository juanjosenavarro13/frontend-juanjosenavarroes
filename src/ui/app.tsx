import { useStoreUser } from "@/features/auth/store/user/store-user";
import { routeTree } from "@/routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: { user: undefined },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  const { user } = useStoreUser();
  return <RouterProvider router={router} context={{ user }} />;
}
