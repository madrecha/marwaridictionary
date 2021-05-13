export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Create only modern build
  // Ref: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern
  // modern: true, // commenting it as it slows down the compile time very much

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Marwari Dictionary',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Learn Marwari language with Marwari dictionary in English and Hindi by Manas Madrecha' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/nuxtcontent.postcss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Generate
  generate: {
    // exclude: [],
    fallback: '404.html',
    cache: {
      ignore: [
        '.nuxt', // buildDir
        'static', // dir.static
        'dist', // generate.dir
        'node_modules',
        '.**/*',
        '.*',
        'README.md',
        'firebase.json' // firebase file (including redirects)
      ]
    }

  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    fullTextSearchFields: ['url.title', 'url.slugurl', 'url.transliteration', 'slug', 'text'],
    nestedProperties: ['url.slugurl', 'url.title', 'url.transliteration',
      'grammar.adjective',
      'grammar.adjective.ending',
      'grammar.adjective.term',
      'grammar.adjective.trans',
      'grammar.adjective.gender',
      'grammar.adjective.gender_f',
      'grammar.adjective.gender_f_trans',
      'grammar.adjective.gender_m',
      'grammar.adjective.gender_m_trans',
      'grammar.adjective.number',
      'grammar.noun',
      'grammar.noun.ending',
      'grammar.noun.term',
      'grammar.noun.trans',
      'grammar.noun.gender',
      'grammar.noun.gender_f',
      'grammar.noun.gender_f_trans',
      'grammar.noun.gender_m',
      'grammar.noun.gender_m_trans',
      'grammar.noun.number',
      'grammar.verb',
      'grammar.verb.ending',
      'grammar.verb.term',
      'grammar.verb.trans',
      'grammar.verb.type',
      'grammar.verb.causative'],

    markdown: {
      tocDepth: 4
    },
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { time } = require('reading-time')(document.text)

        document.readingTime = time
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: false,
    // corejs: 3,
    // extractCSS: true,
    filenames: {
      app: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[name].[contenthash:7]${isModern ? '.modern' : ''}.js`,
      chunk: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[name].[contenthash:7]${isModern ? '.modern' : ''}.js`,
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[name].[contenthash:7].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]'
    },
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false
        }
      }
    }
  }
}
