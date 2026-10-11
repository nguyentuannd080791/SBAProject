import { createBrowserRouter } from "react-router";
import { AuthLayout } from "../layouts/AuthLayout";
import { MainLayout } from "../layouts/MainLayout";
import { accountRoutes } from "./routes/accountRoutes";
import { authRoutes } from "./routes/authRoutes";
import { homeRoutes } from "./routes/homeRoutes";
import { roleRoutes } from "./routes/roleRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [...homeRoutes, ...accountRoutes, ...roleRoutes],
  },
  {
    element: <AuthLayout />,
    children: [...authRoutes],
  },
]);
