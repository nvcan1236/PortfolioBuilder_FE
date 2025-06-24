import { set } from "@nuxt/ui/runtime/utils/index.js";

type AuthType = "login" | "register" | "forgot-password";


export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
    authType: "login" as AuthType,
  }),
  actions: {
    async login(email: string, password: string) {
      this.isAuthenticated = true;
    },
    async logout() {
      this.isAuthenticated = false;
    },

    setAuthType(type: AuthType) {
      this.authType = type;
    }
  },
});
