import { useMutation } from "@tanstack/vue-query";
import type { RegisterUser } from "~/types/auth";
import { useAuthApiFunction } from "~/api/funcs/auth";

export const useLoginMutation = () => {
  const { login } = useAuthApiFunction();
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      login(data.email, data.password),
    onSuccess: (data) => {},
  });
};

export const useRegisterMutation = () => {
  const { register } = useAuthApiFunction();
  return useMutation({
    mutationFn: (data: RegisterUser) => register(data),
    onSuccess: (data) => {},
  });
};


export const useLogoutMutation = () => {
  const { logout } = useAuthApiFunction();
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: (data) => {},
  });
};

export const useRefreshTokenMutation = () => {
  const { refreshToken } = useAuthApiFunction();
  return useMutation({
    mutationFn: () => refreshToken(),
    onSuccess: (data) => {},
  });
};



