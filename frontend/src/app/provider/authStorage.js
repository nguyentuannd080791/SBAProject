const storageKey = "hf_session_user";

export function loadSessionUser() {
  const raw = localStorage.getItem(storageKey);
  return raw ? JSON.parse(raw) : null;
}

export function saveSessionUser(user) {
  localStorage.setItem(storageKey, JSON.stringify(user));
}

export function clearSessionUser() {
  localStorage.removeItem(storageKey);
}
