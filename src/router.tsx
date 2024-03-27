import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage, HomePage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
]);
