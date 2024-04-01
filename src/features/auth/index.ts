import { lazy } from "react";

export const AuthGuardLazy = lazy(() => import("./auth-guard"));
export const AuthLoginLazy = lazy(() => import("./login"));
