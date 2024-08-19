// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },
  css: ['~/assets/scss/main.scss'],
  modules: [
    "@nuxt/eslint",
    ["@nuxtjs/google-fonts", {
      families: {
        Lato: {
          wght: [400, 700]
        }
      }
    }]
  ]
})