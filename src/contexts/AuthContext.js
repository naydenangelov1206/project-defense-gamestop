import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {});

  function userLogin(user) {
    setUser(user);
  }

  function userLogout() {
    setUser({});
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        isAuthenticated: !!user.accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
