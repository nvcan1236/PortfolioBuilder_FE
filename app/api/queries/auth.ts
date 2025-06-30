import { useQuery } from "@tanstack/vue-query";
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
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
  });
}
