import { authApi } from "../api/authApi";
import { connectionError } from "../utils/messages";
import { getLoginRejection } from "../utils/loginRules";
import { toSessionUser } from "../utils/sessionUser";

export async function loginUser(email, password, api = authApi) {
  try {
    const user = await api.findUserByCredentials(email, password);
    const error = getLoginRejection(user);
    return error ? { error } : { user: toSessionUser(user) };
  } catch {
    return { error: connectionError };
  }
}
