import { Navigate } from "react-router";
import { useAuth } from "../provider/useAuth";

export function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
