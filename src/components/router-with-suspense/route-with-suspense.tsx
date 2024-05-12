import { GeneralLoading } from "@/features";
import { LazyExoticComponent, Suspense } from "react";

export function RouteWithSuspense({
  element: Element,
}: Readonly<{
  element: LazyExoticComponent<() => JSX.Element | null>;
}>) {
  return (
    <Suspense fallback={<GeneralLoading />}>
      <Element />
    </Suspense>
  );
}
