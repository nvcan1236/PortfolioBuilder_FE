import type { User } from "~/types/auth";

type AuthType = "login" | "register" | "reset-password" | "verify-forgot-password";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: null,
    isAuthenticated: false,
    authType: "login" as AuthType,
  }),
  actions: {
    async loginDone() {
      this.isAuthenticated = true;
    },
    async logoutDone() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN);
    },

    setAuthType(type: AuthType) {
      this.authType = type;
    },
    setUser(user: User | null) {
      this.user = user;
    },
  },
});
