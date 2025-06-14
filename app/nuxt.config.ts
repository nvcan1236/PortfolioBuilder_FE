// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  routeRules: {
    "/projects/**": { appMiddleware: ["auth"] },
    "/tasks/**": { appMiddleware: ["auth"] },
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
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
      ],
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
