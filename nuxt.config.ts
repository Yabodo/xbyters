// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-gtag",
    "@zadigetvoltaire/nuxt-gtm",
    "nuxt-headlessui",
    "@nuxt/image",
  ],
  // Defaults options
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  gtag: {
    id: "G-RTEESK2VV0",
    initialConsent: true,
  },
  gtm: {
    id: "GTM-PSMDBKMZ",
  },
  css: ["animate.css/animate.min.css"],
});
