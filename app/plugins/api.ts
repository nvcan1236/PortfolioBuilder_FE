import { defineNuxtPlugin } from "#app";
import axios from "axios";
import { useRuntimeConfig } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const api = axios.create({
    baseURL: config.public.apiBase,
    timeout: 10000,
  });

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  let isRefreshing = false;
  let failedQueue: (() => void)[] = [];

  const processQueue = () => {
    failedQueue.forEach((cb) => cb());
    failedQueue = [];
  };

  api.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalRequest = err.config;

      if (err.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (!isRefreshing) {
          isRefreshing = true;

          try {
            const refreshToken = localStorage.getItem(
              LOCAL_STORAGE_ITEM.REFRESH_TOKEN
            );
            if (!refreshToken) throw new Error("No refresh token");

            const response = await api.post("/auth/refresh-token", {
              refreshToken,
            });

            const newAccessToken = response.data.accessToken;
            localStorage.setItem(
              LOCAL_STORAGE_ITEM.ACCESS_TOKEN,
              newAccessToken
            );
            localStorage.setItem(
              LOCAL_STORAGE_ITEM.REFRESH_TOKEN,
              response.data.refreshToken
            );

            isRefreshing = false;
            processQueue();

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return api(originalRequest);
          } catch (refreshErr) {
            isRefreshing = false;
            failedQueue = [];
            localStorage.removeItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
            localStorage.removeItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN);
            return Promise.reject(refreshErr);
          }
        }

        return new Promise((resolve) => {
          failedQueue.push(() => resolve(api(originalRequest)));
        });
      }

      return Promise.reject(err);
    }
  );

  nuxtApp.provide("api", api);
});
