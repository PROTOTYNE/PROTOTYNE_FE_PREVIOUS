import axios from "axios";
import { PAGE_URL } from "./path";

export const API = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzI0MDc4NDAyLCJleHAiOjE3MjQwODIwMDJ9.WWlqlc4Z40AxIxu8y1uLGhb4LyH8eP0c2o-QI-hXTy8",
  },
});

export const FORMAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzI0MDc4NDAyLCJleHAiOjE3MjQwODIwMDJ9.WWlqlc4Z40AxIxu8y1uLGhb4LyH8eP0c2o-QI-hXTy8",
  },
});

const storageAccessKey = "JWT_ACCESS";

//Auth
export const storeAccess = (token: string) => {
  localStorage.setItem(storageAccessKey, token);
};

export const setAccess = (token: string) => {
  API.defaults.headers["Authorization"] = `${token}`;
  FORMAPI.defaults.headers["Authorization"] = `${token}`;
};

export const resetAccess = () => {
  delete API.defaults.headers["Authorization"];
  delete FORMAPI.defaults.headers["Authorization"];
  localStorage.removeItem(storageAccessKey);
};

export const getAccess = (): string | null => {
  return localStorage.getItem(storageAccessKey);
};

API.interceptors.response.use(
  (response) => response,
  async () => {
    resetAccess();
    location.href = PAGE_URL.SignIn;
  }
);
