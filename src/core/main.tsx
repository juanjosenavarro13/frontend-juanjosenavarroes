import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { VercelAnalitics } from "../features/vercel";
import "./main.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VercelAnalitics />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
