import { httpClient } from "../../../shared/api/httpClient";

export function createTokenApi(collection) {
  return {
    async createToken(token) {
      await httpClient.post(`/${collection}`, token);
    },

    async findLatestByUserId(userId) {
      const response = await httpClient.get(`/${collection}`, {
        params: { userId, _sort: "id", _order: "desc", _limit: 1 },
      });
      return response.data[0] ?? null;
    },

    async markUsed(tokenId) {
      await httpClient.patch(`/${collection}/${tokenId}`, { used: true });
    },
  };
}
