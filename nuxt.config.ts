// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    ["@pinia/nuxt",{
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
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
          Montserrat: {
            wght: [500],
          }
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
      solid: ['star','list','magnifying-glass']
    }
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'favorites',
        path: '/favorites',
        file: '~/pages/list.vue'
      })
    }
  },
  imports: {
    dirs: ['stores']
  }
});