import { useCallback } from "react";
import { CreateAccountCommand } from "@/types/create-account.command";
import { LoginCommand } from "@/types/login.command";
import axios from "@/common/axios";
import { LOCAL_STORAGE_ACCESS_TOKEN } from "@/common/constants";

export const useAuthOptions = () => {
  const createAccount = useCallback((command: CreateAccountCommand) => {
    return axios.post("/auth/register", command);
  }, []);
  const login = useCallback((command: LoginCommand) => {
    return axios.post("/auth/login", command);
  }, []);

  const setAccessToken = useCallback((accessToken: string) => {
    localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, accessToken);
  }, []);
  return { createAccount, login, setAccessToken };
};
