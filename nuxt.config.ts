// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/eslint",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: {
            wght: [400, 700],
          },
        },
      },
    ],
    "@vesp/nuxt-fontawesome"
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['star','list']
    }
  }
});