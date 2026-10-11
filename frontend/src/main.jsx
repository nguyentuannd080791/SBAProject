import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/theme.css";
import { AuthProvider } from "./app/provider/AuthProvider";
import { router } from "./app/router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
