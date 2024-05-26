import { lazy } from "react";

export const AdminLazy = lazy(() => import("./admin"));
export const AdminGuardLazy = lazy(() => import("./admin-guard"));

export * from "./pages/users/admin-users";
export * from "./pages/users-edit/users-edit";
export * from "./pages/users-delete/users-delete";
