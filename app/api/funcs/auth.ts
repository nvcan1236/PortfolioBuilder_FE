import type { Response } from "~/types/common";
import type { RegisterUser, User } from "~/types/auth";
import type { AxiosInstance } from "axios";

export const useAuthApiFunction = () => {
  const { $api } = useNuxtApp();
  const api = $api as AxiosInstance;

  const login = (
    email: string,
    password: string
  ): Promise<Response<{ accessToken: string; refreshToken: string }>> => {
    return api.post(`/auth/login`, { email, password }).then((res) => res.data);
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

  return {
    getUserById,
    login,
    register,
    getMe,
    logout,
    refreshToken,
  };
};
