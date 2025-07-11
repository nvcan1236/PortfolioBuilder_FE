import { jwtDecode } from "jwt-decode";
import type { AxiosInstance } from "axios";

declare module "#app" {
  interface NuxtApp {
    $api: AxiosInstance;
  }
}

export default defineNuxtPlugin(() => {
  const REFRESH_MARGIN = 2 * 60; // 2 phút
  const REFRESH_INTERVAL = 30 * 1000; // kiểm tra mỗi 30s

  const checkToken = async () => {
    const token = localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN);
    if (!token || !refreshToken) return;

    const decoded = jwtDecode(token);
    if (!decoded?.exp) return;

    const currentTime = Math.floor(Date.now() / 1000);
    const timeLeft = decoded.exp - currentTime;

    if (timeLeft < REFRESH_MARGIN) {
      try {
        const { $api } = useNuxtApp();
        const res = await $api.post<{
          success: boolean;
          message: string;
          data: {
            accessToken: string;
            refreshToken: string;
          };
          errors: string[];
        }>("/auth/refresh-token", {
          refreshToken,
        });

        const newToken = res.data.data.accessToken;
        const newRefreshToken = res.data.data.refreshToken;
        localStorage.setItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN, newToken);
        localStorage.setItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN, newRefreshToken);
        console.log("✅ Token refreshed automatically");
      } catch (err) {
        localStorage.removeItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN);
        console.error("❌ Failed to refresh token:", err);
      }
    }
  };

  setInterval(checkToken, REFRESH_INTERVAL);
});
