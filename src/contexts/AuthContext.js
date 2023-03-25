import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {});

  function userLogin(user) {
    setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userLogin,
        isAuthenticated: !!user.accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
