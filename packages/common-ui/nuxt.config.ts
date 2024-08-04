// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: { '~ui': resolve('./') },
  components: [
    { path: '~ui/components', prefix: 'Ui' }
  ],
  modules: ["@nuxtjs/tailwindcss"]
})