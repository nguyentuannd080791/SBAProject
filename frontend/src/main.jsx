import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/theme.css";
import { router } from "./app/router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
