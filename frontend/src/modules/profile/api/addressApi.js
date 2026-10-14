import { callApi } from "../../../shared/api/callApi";
import { httpClient } from "../../../shared/api/httpClient";

export const addressApi = {
  list() {
    return callApi(() => httpClient.get("/addresses"));
  },

  create(values) {
    return callApi(() => httpClient.post("/addresses", values));
  },

  update(addressId, values) {
    return callApi(() => httpClient.patch(`/addresses/${addressId}`, values));
  },

  remove(addressId) {
    return callApi(() => httpClient.delete(`/addresses/${addressId}`));
  },

  makeDefault(addressId) {
    return callApi(() => httpClient.post(`/addresses/${addressId}/default`));
  },
};
