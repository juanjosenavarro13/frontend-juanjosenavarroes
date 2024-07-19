import { ArticleAdmin } from "@/features";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/_authenticated/_adminLayout/admin/articles/",
)({
  component: ArticleAdmin,
});
