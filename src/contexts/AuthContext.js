import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  function userLogin(user) {
    setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
