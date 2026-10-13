import { ProfilePage } from "../../../modules/profile/pages/ProfilePage";
import { RequireRole } from "../RequireRole";

export const customerRoutes = [
  {
    path: "profile",
    element: (
      <RequireRole roles={["customer"]}>
        <ProfilePage />
      </RequireRole>
    ),
  },
];
