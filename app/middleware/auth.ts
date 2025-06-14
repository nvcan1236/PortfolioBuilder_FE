import { useAuthStore } from "~/stores/useAuth"

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return navigateTo('/login')
  }
})