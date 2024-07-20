import { VercelAnalitics } from "@/core/components";
import { App } from "@/ui/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "./main.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <VercelAnalitics />
    </QueryClientProvider>
  </React.StrictMode>,
);
