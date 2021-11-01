import axios, { AxiosRequestConfig } from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useHistory } from "react-router";
import { authApi } from "../../apis/config";
import * as userApi from "../../apis/user";

export type User = {
  userId: number;
  username: string;
  email: string;
  accessToken: string;
};
interface IUserInfo {
  username: string;
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
  postalCode: string;
  country: string;
  address: string;
}
interface IAuthContext {
  user?: User;
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => void;
  signUp: (email: string, username: string, password: string) => void;
  update: (data:IUserInfo) => void;
  logout: () => void;
  testTokens: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  async function signUp(email: string, username: string, password: string) {
    setLoading(true);
    try {
      const user = await userApi.signUp({ email, username, password });
      console.log(user);
      authApi.defaults.headers = {
        "x-access-token": user.accessToken,
      };
      setUser(user);
      history.push("/signedup");
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  async function login(email: string, password: string) {
    setLoading(true);
    try {
      const user = await userApi.login({ email, password });
      authApi.defaults.headers = {
        "x-access-token": user.accessToken,
      };

      if(user.userId !== null && user.userId !== undefined){
        setUser(user);
      }
      history.push("/");
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  async function update(data:{username: string,
    firstName: string,
    lastName: string,
    birthday: string,
    email: string,
    postalCode: string,
    country: string,
    address: string}) {
    setLoading(true);
    try {
      const user = await userApi.update(data);
      console.log(user);
      authApi.defaults.headers = {
        "x-access-token": user.accessToken,
      };
      setUser(user);
      history.push("/");
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    try {
      const res = await userApi.logout();
      authApi.defaults.headers = {
        "x-access-token": "",
      };
      setUser(undefined);

      history.push("/login");
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  async function testTokens() {
    setLoading(true);
    try {
      const user = await userApi.testToken();
      setUser(user);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signUp,
      update,
      logout,
      testTokens,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
