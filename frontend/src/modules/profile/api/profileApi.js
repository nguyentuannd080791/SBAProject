import { callApi } from "../../../shared/api/callApi";
import { httpClient } from "../../../shared/api/httpClient";

export const profileApi = {
  get() {
    return callApi(() => httpClient.get("/profile"));
  },

  update({ fullName, phone }) {
    return callApi(() => httpClient.patch("/profile", { fullName, phone }));
  },
};
