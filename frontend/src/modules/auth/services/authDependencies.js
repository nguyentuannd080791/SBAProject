import { authApi } from "../api/authApi";
import { passwordResetApi } from "../api/passwordResetApi";
import { verificationApi } from "../api/verificationApi";

export const authDependencies = {
  users: authApi,
  tokens: verificationApi,
  resetTokens: passwordResetApi,
};
