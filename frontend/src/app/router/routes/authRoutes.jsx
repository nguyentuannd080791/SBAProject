import { ForgotPasswordPage } from "../../../modules/auth/pages/ForgotPasswordPage";
import { LoginPage } from "../../../modules/auth/pages/LoginPage";
import { RegisterHookFormPage } from "../../../modules/auth/pages/RegisterHookFormPage";
import { RegisterPage } from "../../../modules/auth/pages/RegisterPage";
import { ResetPasswordPage } from "../../../modules/auth/pages/ResetPasswordPage";
import { VerifyEmailPage } from "../../../modules/auth/pages/VerifyEmailPage";

export const authRoutes = [
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
  { path: "register-rhf", element: <RegisterHookFormPage /> },
  { path: "verify-email", element: <VerifyEmailPage /> },
  { path: "forgot-password", element: <ForgotPasswordPage /> },
  { path: "reset-password", element: <ResetPasswordPage /> },
];

