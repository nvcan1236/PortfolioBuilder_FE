// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

// Runtime configuration for API and other settings
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE_URL,
      appEnv: process.env.NODE_ENV,
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  routeRules: {
    "/build": { appMiddleware: ["auth"] },
    "/applications/**": { appMiddleware: ["auth"] },
  },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    prefix: "U",
    theme: {
      transitions: false,
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  image: {
    domains: ["picsum.photos"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
      global: true,
    },
  ],
});
