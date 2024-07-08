import { ReactQueryDevTools, VercelAnalitics } from "@/core/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./i18n";
import "./main.css";
import { router } from "./router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <VercelAnalitics />
      <RouterProvider router={router} />
      {import.meta.env.DEV && <ReactQueryDevTools />}
    </QueryClientProvider>
  </React.StrictMode>,
);
