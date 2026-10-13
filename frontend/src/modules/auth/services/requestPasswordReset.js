import { connectionError } from "../../../shared/utils/messages";
import { buildVerificationToken } from "../utils/verificationToken";
import { authDependencies } from "./authDependencies";

export async function requestPasswordReset(
  email,
  { users, resetTokens } = authDependencies,
) {
  try {
    const user = await users.findUserByEmail(email);
    if (user) await resetTokens.createToken(buildVerificationToken(user.id));
    return { ok: true };
  } catch {
    return { error: connectionError };
  }
}
