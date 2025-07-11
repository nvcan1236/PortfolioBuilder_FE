import { useQuery } from "@tanstack/vue-query";
import { jwtDecode } from "jwt-decode";
import { useAuthApiFunction } from "~/api/funcs/auth";

export function useUserQuery(id: string) {
  const { getUserById } = useAuthApiFunction();
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    staleTime: 1000 * 60 * 5,
  });
}

export function useMeQuery() {
  const { getMe } = useAuthApiFunction();
  const authStore = useAuthStore();
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
    // enabled: authStore.isAuthenticated,
  });
}
