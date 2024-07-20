import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export default function DevTools() {
  return (
    <>
      <TanStackRouterDevtools position="bottom-left" initialIsOpen={false} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
