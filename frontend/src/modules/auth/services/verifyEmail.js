import { connectionError } from "../utils/messages";
import { getCodeRejection } from "../utils/verificationToken";
import { authDependencies } from "./authDependencies";

export async function verifyEmail(
  email,
  code,
  { users, tokens } = authDependencies,
) {
  try {
    const user = await users.findUserByEmail(email);
    const token = user ? await tokens.findLatestByUserId(user.id) : null;
    const error = getCodeRejection(token, code, new Date());
    if (error) return { error };
    await tokens.markUsed(token.id);
    await users.markEmailVerified(user.id);
    return { ok: true };
  } catch {
    return { error: connectionError };
  }
}
