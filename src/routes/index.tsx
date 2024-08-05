import { Portfolio } from "@/ui/portfolio";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Portfolio,
});
