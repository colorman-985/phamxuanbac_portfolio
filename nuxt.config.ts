// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  alias: {
    '~/data': './app/data',
  },

  vite: {
    resolve: {
      alias: {
        '~/data': './app/data',
      },
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Phạm Xuân Bắc — Backend Developer',
      meta: [
        {
          name: 'description',
          content:
            'Phạm Xuân Bắc – Lập trình viên Backend chuyên sâu về Laravel, PHP, MySQL và thiết kế RESTful API. Fresher tại TP. Cần Thơ, Việt Nam.',
        },
        { name: 'theme-color', content: '#b80035' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Phạm Xuân Bắc — Backend Developer',
        },
        {
          property: 'og:description',
          content:
            'Lập trình viên Backend chuyên sâu về Laravel, PHP, MySQL và thiết kế RESTful API. Fresher tại TP. Cần Thơ, Việt Nam.',
        },
        { property: 'og:locale', content: 'vi_VN' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Phạm Xuân Bắc — Backend Developer',
        },
        {
          name: 'twitter:description',
          content:
            'Lập trình viên Backend chuyên sâu về Laravel, PHP, MySQL và thiết kế RESTful API.',
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Phạm Xuân Bắc' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
