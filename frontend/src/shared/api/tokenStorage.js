const tokenKey = "hf_session_token";

export function loadToken() {
  return localStorage.getItem(tokenKey);
}

export function saveToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function clearToken() {
  localStorage.removeItem(tokenKey);
}
