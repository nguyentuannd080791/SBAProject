import { httpClient } from "../../../shared/api/httpClient";

export const profileApi = {
  async findUserById(userId) {
    const response = await httpClient.get("/users", { params: { id: userId } });
    return response.data[0] ?? null;
  },

  async updateUser(userId, changes) {
    const response = await httpClient.patch(`/users/${userId}`, changes);
    return response.data;
  },
};
