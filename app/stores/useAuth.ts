export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),
  actions: {
    async login(email: string, password: string) {
      this.isAuthenticated = true;
    },
    async logout() {
      this.isAuthenticated = false;
    },
  },
});
