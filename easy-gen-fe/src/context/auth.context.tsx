import { createContext, useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "@/common/constants";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
} | null>(null);

export const AuthProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
    setIsLoggedIn(isAuthenticated);
  }, [setIsLoggedIn, isLoggedIn]);

  const login = (accessToken: string) => {
    localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, accessToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
