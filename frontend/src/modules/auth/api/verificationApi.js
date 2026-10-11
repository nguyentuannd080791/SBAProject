import { httpClient } from "../../../shared/api/httpClient";

export const verificationApi = {
  async createToken(token) {
    await httpClient.post("/verificationTokens", token);
  },

  async findLatestByUserId(userId) {
    const response = await httpClient.get("/verificationTokens", {
      params: { userId, _sort: "id", _order: "desc", _limit: 1 },
    });
    return response.data[0] ?? null;
  },

  async markUsed(tokenId) {
    await httpClient.patch(`/verificationTokens/${tokenId}`, { used: true });
  },
};
