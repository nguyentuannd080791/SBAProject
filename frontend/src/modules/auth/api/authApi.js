import { httpClient } from "../../../shared/api/httpClient";

export const authApi = {
  async findUserByCredentials(email, password) {
    const response = await httpClient.get("/users", {
      params: { email, password },
    });
    return response.data[0] ?? null;
  },
};
