import { authApi } from "../api/authApi";
import { getLoginRejection } from "../utils/loginRules";
import { toSessionUser } from "../utils/sessionUser";

const connectionError = "Không thể kết nối máy chủ. Vui lòng thử lại.";

export async function loginUser(email, password, api = authApi) {
  try {
    const user = await api.findUserByCredentials(email, password);
    const error = getLoginRejection(user);
    return error ? { error } : { user: toSessionUser(user) };
  } catch {
    return { error: connectionError };
  }
}
