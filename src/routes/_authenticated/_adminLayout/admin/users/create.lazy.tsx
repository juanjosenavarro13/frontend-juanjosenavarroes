import { UsersCreate } from "@/features";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_authenticated/_adminLayout/admin/users/create",
)({
  component: UsersCreate,
});
