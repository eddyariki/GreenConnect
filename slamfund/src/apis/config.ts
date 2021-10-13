import axios from "axios";
import { authApiBaseURL } from "../constants";

export const authApi = axios.create({
  baseURL: authApiBaseURL,
  withCredentials: true,
});
