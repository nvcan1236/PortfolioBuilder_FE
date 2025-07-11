import type { Response } from "~/types/common";
import type { RegisterUser, User } from "~/types/auth";
import type { AxiosInstance } from "axios";

export const useAuthApiFunction = () => {
  const { $api } = useNuxtApp();
  const api = $api as AxiosInstance;

  const login = (data: {
    email: string;
    password: string;
  }): Promise<Response<{ accessToken: string; refreshToken: string }>> => {
    return api.post(`/auth/login`, data).then((res) => res.data);
  };

  const register = (
    user: RegisterUser
  ): Promise<Response<{ accessToken: string; refreshToken: string }>> => {
    return api.post(`/auth/register`, user).then((res) => res.data);
  };

  const getMe = (): Promise<Response<User>> => {
    return api.post(`/auth/me`).then((res) => res.data);
  };

  const getUserById = (id: string) => {
    return api.get(`/users/${id}`).then((res) => res.data);
  };

  const logout = () => {
    return api.post(`/auth/logout`).then((res) => res.data);
  };

  const refreshToken = () => {
    return api.post(`/auth/refresh-token`).then((res) => res.data);
  };

  const verifyEmail = (data: { email: string }) => {
    return api.post(`/auth/verify-email`, data).then((res) => res.data);
  };

  const resetPassword = (data: {
    email: string;
    code: string;
    newPassword: string;
  }) => {
    return api.post(`/auth/reset-password`, data).then((res) => res.data);
  };

  const forgotPassword = (data: { email: string }) => {
    return api.post(`/auth/forgot-password`, data).then((res) => res.data);
  };

  const confirmEmail = (data: { email: string; code: string }) => {
    return api.post(`/auth/confirm-email`, data).then((res) => res.data);
  };

  return {
    getUserById,
    login,
    register,
    getMe,
    logout,
    refreshToken,
    verifyEmail,
    resetPassword,
    forgotPassword,
    confirmEmail,
  };
};
