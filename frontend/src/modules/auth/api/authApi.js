import { httpClient } from "../../../shared/api/httpClient";

export const authApi = {
  async findUserByCredentials(email, password) {
    const response = await httpClient.get("/users", {
      params: { email, password },
    });
    return response.data[0] ?? null;
  },

  async findUserByEmail(email) {
    const response = await httpClient.get("/users", { params: { email } });
    return response.data[0] ?? null;
  },

  async createUser(user) {
    const response = await httpClient.post("/users", user);
    return response.data;
  },

  async markEmailVerified(userId) {
    await httpClient.patch(`/users/${userId}`, { emailVerified: true });
  },

  async updatePassword(userId, password) {
    await httpClient.patch(`/users/${userId}`, { password });
  },
};
