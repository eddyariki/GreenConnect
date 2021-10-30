import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { protectedRoutes } from "../routes";
import useAuth from "./user/useAuth";

export default function WithRedirect() {
  const { user, loading, error, login, signUp, logout } = useAuth();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (protectedRoutes.includes(location.pathname) && !user) {
      history.push("/login");
    }
  }, [location.pathname, user]);
  return <div></div>;
}
