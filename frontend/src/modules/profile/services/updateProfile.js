import { connectionError } from "../../../shared/utils/messages";
import { profileApi } from "../api/profileApi";
import { toProfile, toProfileChanges } from "../utils/profileMapping";

export async function updateProfile(userId, values, api = profileApi) {
  try {
    const user = await api.updateUser(userId, toProfileChanges(values));
    return { profile: toProfile(user) };
  } catch {
    return { error: connectionError };
  }
}
