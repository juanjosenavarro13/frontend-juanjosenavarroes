import { lazy } from "react";

export const AdminLazy = lazy(() => import("./admin"));
export const AdminGuardLazy = lazy(() => import("./admin-guard"));

export * from "./pages/users/admin-users";
