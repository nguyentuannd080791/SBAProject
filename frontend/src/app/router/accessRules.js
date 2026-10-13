import { getHomePath } from "./roleHomePaths";

export function getAccessRedirect(user, allowedRoles) {
  if (!user) return "/login";
  if (allowedRoles && !allowedRoles.includes(user.role))
    return getHomePath(user.role);
  return "";
}
