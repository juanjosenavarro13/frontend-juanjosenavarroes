import { lazy } from "react";

export const PortfolioLazy = lazy(() => import("./portfolio"));
export * from "./portfolio";
