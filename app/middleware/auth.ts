import { useAuthStore } from "~/stores/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const toast = useToast();

  if (!authStore.isAuthenticated) {
    toast.add({
      title: "Error",
      description: "You are not authenticated.",
      color: "error",
    });
    return navigateTo("/");
  }
});
