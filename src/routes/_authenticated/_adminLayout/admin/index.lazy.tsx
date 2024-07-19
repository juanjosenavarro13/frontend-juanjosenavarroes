import { Admin } from "@/features/admin/admin";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/_adminLayout/admin/")(
  {
    component: Admin,
  },
);
