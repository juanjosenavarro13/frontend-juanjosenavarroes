import { Portfolio } from "@/features/portfolio/portfolio";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Portfolio,
});
