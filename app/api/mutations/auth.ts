import { useMutation } from "@tanstack/vue-query";
import type { RegisterUser } from "~/types/auth";
import { useAuthApiFunction } from "~/api/funcs/auth";
import { useQueryClient } from "@tanstack/vue-query";

export const useLoginMutation = () => {
  const { login } = useAuthApiFunction();
  const client = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      client.invalidateQueries({
        queryKey: ["me"],
      });
    },
  });
};

export const useRegisterMutation = () => {
  const { register } = useAuthApiFunction();
  const client = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      client.invalidateQueries({
        queryKey: ["me"],
      });
    },
  });
};


export const useLogoutMutation = () => {
  const { logout } = useAuthApiFunction();
  return useMutation({
    mutationFn: logout,
  });
};

export const useRefreshTokenMutation = () => {
  const { refreshToken } = useAuthApiFunction();
  return useMutation({
    mutationFn: refreshToken,
  });
};

export const useVerifyEmailMutation = () => {
  const { verifyEmail } = useAuthApiFunction();
  return useMutation({
    mutationFn: verifyEmail,
  });
};

export const useConfirmEmailMutation = () => {
  const { confirmEmail } = useAuthApiFunction();
  return useMutation({
    mutationFn: confirmEmail,
  });
};

export const useForgotPasswordMutation = () => {
  const { forgotPassword } = useAuthApiFunction();
  return useMutation({
    mutationFn: forgotPassword,
  });
};


export const useResetPasswordMutation = () => {
  const { resetPassword } = useAuthApiFunction();
  return useMutation({
    mutationFn: resetPassword,
  });
};
