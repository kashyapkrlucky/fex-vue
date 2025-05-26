import { defineStore } from "pinia";
import axios from "@/lib/axios";
import type { UserState } from "@/types";

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    user: JSON.parse(localStorage.getItem("user") || "null"),
    token: localStorage.getItem("token") || "",
    userSearchResult: JSON.parse("null"),
  }),
  getters: {
    isAuthenticated: (state) => !!state.token && !!state.user,
  },
  actions: {
    /**
     * Logs in the user by sending credentials to the server.
     * @param email - User's email.
     * @param password - User's password.
     */
    async signIn(email: string, password: string): Promise<void> {
      const {
        data: { data },
      } = await axios.post("/user/sign-in", { email, password });
      this.user = data.user;
      this.token = data.token;
      localStorage.setItem("token", this.token);
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    /**
     * Registers a new user.
     * @param name - User's name.
     * @param email - User's email.
     * @param password - User's password.
     */
    async signUp(name: string, email: string, password: string): Promise<void> {
      await axios.post("/user/sign-up", {
        name,
        email,
        password,
      });
    },
    /**
     * Logs out the current user and clears all user data.
     */
    logout(): void {
      this.user = null;
      this.token = "";
      localStorage.clear();
    },
  },
});
