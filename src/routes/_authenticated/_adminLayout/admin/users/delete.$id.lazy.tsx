import { UsersDelete } from "@/features";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_authenticated/_adminLayout/admin/users/delete/$id",
)({
  component: UsersDelete,
});
