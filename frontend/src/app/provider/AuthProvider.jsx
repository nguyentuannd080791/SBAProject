import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  clearSessionUser,
  loadSessionUser,
  saveSessionUser,
} from "./authStorage";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadSessionUser);

  function login(sessionUser) {
    saveSessionUser(sessionUser);
    setUser(sessionUser);
  }

  function logout() {
    clearSessionUser();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
