const roleHomePaths = {
  customer: "/",
  staff: "/staff",
  manager: "/manager",
  administrator: "/admin",
  delivery_partner: "/delivery",
};

export function getHomePath(role) {
  return Object.hasOwn(roleHomePaths, role) ? roleHomePaths[role] : "/";
}
