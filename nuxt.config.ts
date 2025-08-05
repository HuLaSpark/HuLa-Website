// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module', '@nuxt/ui', '@nuxt/image'],
  css: ['~/styles/scss/variable.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      script: [{ src: '/icon.js' }]
    }
  },
  components: [
    {
      path: '~/components/',
      pathPrefix: false
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    },
    esbuild: {
      // * 打包去除 console.log && debugger
      pure: ['console.log', 'debugger']
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3000
  }
})
