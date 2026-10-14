import { connectionError } from "../utils/messages";

export function getErrorMessage(error) {
  return error.response?.data?.message ?? connectionError;
}

export async function callApi(request) {
  try {
    const response = await request();
    return { data: response.data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}
