type AuthType = "login" | "register" | "forgot-password";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
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
      localStorage.removeItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
      localStorage.removeItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN);
    },

    setAuthType(type: AuthType) {
      this.authType = type;
    },
  },
});
