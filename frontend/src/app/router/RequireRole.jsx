import { Navigate } from "react-router";
import { useAuth } from "../provider/useAuth";
import { getAccessRedirect } from "./accessRules";

export function RequireRole({ roles, children }) {
  const { user } = useAuth();
  const redirectPath = getAccessRedirect(user, roles);

  if (redirectPath) return <Navigate to={redirectPath} replace />;
  return children;
}
