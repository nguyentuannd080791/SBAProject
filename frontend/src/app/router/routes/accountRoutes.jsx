import { ChangePasswordPage } from "../../../modules/auth/pages/ChangePasswordPage";
import { RequireAuth } from "../RequireAuth";

export const accountRoutes = [
  {
    path: "change-password",
    element: (
      <RequireAuth>
        <ChangePasswordPage />
      </RequireAuth>
    ),
  },
];
