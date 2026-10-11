import { connectionError } from "../utils/messages";
import { authDependencies } from "./authDependencies";

const wrongCurrentPasswordError = "Mật khẩu hiện tại không đúng.";

export async function changePassword(
  email,
  currentPassword,
  newPassword,
  { users } = authDependencies,
) {
  try {
    const user = await users.findUserByCredentials(email, currentPassword);
    if (!user) return { error: wrongCurrentPasswordError };
    await users.updatePassword(user.id, newPassword);
    return { ok: true };
  } catch {
    return { error: connectionError };
  }
}
