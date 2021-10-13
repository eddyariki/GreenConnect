import React, { useMemo } from "react";
import axios, { AxiosRequestConfig } from "axios";
import useAuth from "./user/useAuth";
import { authApi } from "../apis/config";

const WithAxios = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const { user, loading, error, login, signUp, logout, testTokens } = useAuth();

  useMemo(() => {
    authApi.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        if (
          err.config &&
          err.response &&
          err.response.status === 401 &&
          !err.config.__retry
        ) {
          err.config.__retry = true;
          testTokens();
          authApi.defaults.headers = {
            "x-access-token": user ? user.accessToken : "",
          };
          return authApi(err.config);
        }
      }
    );
  }, [user]);

  return children as React.ReactElement<any>;
};

export default WithAxios;
