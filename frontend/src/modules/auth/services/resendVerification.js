import { connectionError } from "../utils/messages";
import { buildVerificationToken } from "../utils/verificationToken";
import { authDependencies } from "./authDependencies";

export async function resendVerification(
  email,
  { users, tokens } = authDependencies,
) {
  try {
    const user = await users.findUserByEmail(email);
    if (user && !user.emailVerified) {
      await tokens.createToken(buildVerificationToken(user.id));
    }
    return { ok: true };
  } catch {
    return { error: connectionError };
  }
}
