const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/axios',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/404/index.vue')
      });
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function(){
      return [
        '/news/cjyrhybqkmhcx0910uytn5uup',
        '/news/cjyrhwekzmc4p0941ca1jtnnz',
        '/news/cjyrhutermbxm0941wvsn1j16',
        '/news/cjyrhtawpmgp10910gp781xkt',
        '/films/cjyrjeddmfaz00d53kdenc72r',
        '/films/cjyrjbypimkge09416jf1jf4k',
        '/films/cjyrj5q0lmjjd0941b11baf2r',
        '/films/cjyriehvlmelj0941u916rx55',
        '/films/cjyvp8n944g640d53g6ugmtke',
        '/films/cjyvp4qoh4fj40d53z9ka8jw4',
        '/films/cjyvopdfk6wh40910jnawmfum',
        '/news'
      ]
    }
  }
}
