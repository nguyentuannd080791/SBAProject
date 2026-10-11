import { LoginPage } from "../../../modules/auth/pages/LoginPage";
import { RegisterPage } from "../../../modules/auth/pages/RegisterPage";
import { VerifyEmailPage } from "../../../modules/auth/pages/VerifyEmailPage";

export const authRoutes = [
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
  { path: "verify-email", element: <VerifyEmailPage /> },
];
