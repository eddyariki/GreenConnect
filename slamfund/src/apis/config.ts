import axios from "axios";
import { apiBaseURL, authApiBaseURL } from "../constants";

export const authApi = axios.create({
  baseURL: authApiBaseURL,
  withCredentials: true,
});

export const api = axios.create({
  baseURL: apiBaseURL,
  withCredentials: true
})