import { buildVerificationToken } from "../utils/verificationToken";
import { connectionError } from "../../../shared/utils/messages";
import { toNewCustomer } from "../utils/newCustomer";
import { authDependencies } from "./authDependencies";

const emailTakenError = "Email này đã được đăng ký.";

export async function registerUser(
  values,
  { users, tokens } = authDependencies,
) {
  try {
    const customer = toNewCustomer(values);
    if (await users.findUserByEmail(customer.email))
      return { error: emailTakenError };
    const created = await users.createUser(customer);
    await tokens.createToken(buildVerificationToken(created.id));
    return { email: created.email };
  } catch {
    return { error: connectionError };
  }
}
