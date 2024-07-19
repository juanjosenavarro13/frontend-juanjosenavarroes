import { Blog } from "@/features/blog/blog";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: Blog,
});
