// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module', '@nuxt/ui', '@nuxt/image', '@nuxtjs/color-mode'],
  icon: {
    serverBundle: {
      collections: ['solar']
    },
    fetchTimeout: 2000,
    fallbackToApi: true // 允许回退到 CDN，但优先使用本地图标库
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      script: [{ src: '/icon.js' }]
    }
  },
  colorMode: {
    preference: 'dark' // default value of colorMode.preference
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
          api: 'modern',
          additionalData: '@use "~/styles/scss/variable.scss" as *;'
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
  },
  runtimeConfig: {
    // 服务器端私有变量（不会暴露给客户端）
    githubToken: process.env.TOTAL_COUNT_TOKEN,
    // 公共变量（会暴露给客户端，如果需要的话）
    public: {
      // 可以在这里添加需要在客户端使用的公共配置
    }
  }
})
