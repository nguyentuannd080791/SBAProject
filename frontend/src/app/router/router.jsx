import { createBrowserRouter } from "react-router";
import { AuthLayout } from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";
import { authRoutes } from "./routes/authRoutes";
import { homeRoutes } from "./routes/homeRoutes";
import { roleRoutes } from "./routes/roleRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...homeRoutes, ...roleRoutes],
  },
  {
    element: <AuthLayout />,
    children: [...authRoutes],
  },
]);
