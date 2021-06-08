module.exports = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtapp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/supabase.server.js', mode: 'server' },
    { src: '~/plugins/mmcc.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components/',
      {
        path: '~/components/layout/',
        prefix: 'layout',
      },
      {
        path: '~/components/section/',
        prefix: 'section',
      },
      {
        path: '~/components/base/',
        prefix: 'base',
      },
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    configurationId: 'f630f0af-8ec8-4caf-b9b3-bdef8462df01',
    supabaseKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjIxMjYxODA2LCJleHAiOjE5MzY4Mzc4MDZ9.jFt9LKNeIeJ5DZEtKIHWe71neRbSxL9TC-FmyB-0Sc8',
    supabaseUrl: 'https://wemtonqwokryfponsnhm.supabase.co',
  },
}
