import { connectionError } from "../../../shared/utils/messages";
import { profileApi } from "../api/profileApi";
import { toProfile } from "../utils/profileMapping";

const notFoundError = "Không tìm thấy hồ sơ.";

export async function getProfile(userId, api = profileApi) {
  try {
    const user = await api.findUserById(userId);
    return user ? { profile: toProfile(user) } : { error: notFoundError };
  } catch {
    return { error: connectionError };
  }
}
