import axios from "axios";
import { useUserStore } from "@/stores/user.store";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use((config: any) => {
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

    if (error.response?.status === 401) {
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
