import { httpClient } from "../../../shared/api/httpClient";

export function createTokenApi(collection) {
  return {
    async createToken(token) {
      await httpClient.post(`/${collection}`, token);
    },

    async findLatestByUserId(userId) {
      const response = await httpClient.get(`/${collection}`, {
        params: { userId },
      });
      return response.data[response.data.length - 1] ?? null;
    },

    async markUsed(tokenId) {
      await httpClient.patch(`/${collection}/${tokenId}`, { used: true });
    },
  };
}
