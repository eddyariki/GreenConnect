import { AxiosResponse } from "axios";
import { User } from "../context/user/useAuth";
import { authApi } from "./config";

export const login = async (params: {
  email: string;
  password: string;
}): Promise<User> => {
  const res: AxiosResponse<User> = await authApi.post("/login", params);
  return res.data;
};

export const logout = async () => {
  const res = await authApi.post("/logout");
  return res.data;
};

export const signUp = async (params: {
  email: string;
  username: string;
  password: string;
}): Promise<User> => {
  const res: AxiosResponse<User> = await authApi.post("/signup", params);
  return res.data;
};

export const update = async (params: {
  username: string;
    firstName: string;
    lastName: string;
    birthday: string;
    email: string;
    postalCode: string;
    country: string;
    address: string;
}): Promise<User> => {
  const res: AxiosResponse<User> = await authApi.put("/update", params);
  return res.data;
};

export const testToken = async (): Promise<User> => {
  const res: AxiosResponse<User> = await authApi.post("/tokens");
  return res.data;
};
