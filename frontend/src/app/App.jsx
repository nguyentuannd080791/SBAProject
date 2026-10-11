import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/theme.css";
import { RouterProvider } from "react-router";
import { AuthProvider } from "./provider/AuthProvider";
import { router } from "./router/router";

export function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
