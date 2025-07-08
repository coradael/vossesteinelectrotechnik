// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/',
  },
  css: ['~/assets/css/variables.css', '~/assets/css/main.css', '~/assets/css/font.css', '~/assets/css/article.css'],
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-gtag',
    '@nuxtjs/sitemap',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  site: {
    url: 'https://vossesteinelektrotechniek.nl',
    name: 'Vossestein Elektrotechniek',
  },
  gtm:{
    id: 'GTM-WHVF8TCB',
  },
  gtag: {
    id: 'G-V0PFMH5NY7',
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})
