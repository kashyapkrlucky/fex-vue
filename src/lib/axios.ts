import axios from "axios";
import { useUserStore } from "@/stores/user.store";
import type { InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const userStore = useUserStore();
    const originalRequest = error.config;

    if (import.meta.env.DEV) {
      console.error("API error:", error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      // Don't logout or redirect if it's the login endpoint
      if (!originalRequest.url?.includes("/user/sign-in")) {
        userStore.logout();
        window.location.href = "/sign-in";
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
