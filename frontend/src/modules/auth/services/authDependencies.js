import { authApi } from "../api/authApi";
import { verificationApi } from "../api/verificationApi";

export const authDependencies = { users: authApi, tokens: verificationApi };
