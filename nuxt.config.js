export default {
  ignore: [
    'pages/redirect.vue', // just a page to fetch Content API posts to be redirected (uncomment it whenever you need to copy paste the URLs; then comment it back)
    'pages/blog', // WIP
    'pages/learn', // WIP,
    'pages/codetest.vue' // random
  ],

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
    "~/assets/css/all.sass",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollactive.js',
    { src: '~/plugins/vue-dragscroll.js', ssr: false },
    // '~/plugins/vue-tooltip.js',
    '~/plugins/directives',
    // { src: '~/plugins/sitemap.js', ssr: false },
    '~/plugins/vue-google-charts.js', // https://github.com/devstark-com/vue-google-charts
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
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/image',
    'vue-scrollto/nuxt', // https://github.com/rigor789/vue-scrollTo
    'nuxt-buefy',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    // '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

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
      tocDepth: 4,
      remarkPlugins: [
        ['remark-breaks'],
        // ['remark-directive'],
        // ['~/plugins/remark/directive-custom.js'],
        ['@akebifiky/remark-simple-plantuml', { baseUrl: "https://www.plantuml.com/plantuml/svg" }],
        ['@silvenon/remark-smartypants', { dashes: 'oldschool' }],
        // ['remark-mermaid', { simple: true }] // PlantUML already there
      ],
    },
    liveEdit: false,
  },

  i18n: {
    locales: [{
      code: 'en',
      iso: 'en',
      name: 'English',
    }, {
      code: 'hi',
      iso: 'hi',
      name: 'हिन्दी',
    }],
    defaultLocale: 'en',
    strategy: 'prefix',
    // noPrefixDefaultLocale: true,
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./i18n/en.js'),
        hi: require('./i18n/hi.js'),
      },

    }
  },

  // sitemap: {
  //   hostname: 'https://marwari.info',
  //   gzip: true,
  //   exclude: ['/blog', '/learn'],
  //   i18n: true,
  //   routes: async () => {
  //     let routes = [];

  //     const { $content } = require('@nuxt/content')
  //     // const $i18n = require('nuxt-i18n')

  //     let words = await $content(`en/dictionary`, {
  //       deep: true
  //     }).where({
  //       $and: [
  //         { slug: { $ne: "AAA" } },
  //         { dir: `/en/dictionary/words` }
  //       ]
  //     }).fetch();

  //     for (const word of words) {
  //       if (word.url && word.url.slugurl) {
  //         routes.push(`/en/dictionary/word/${word.url.slugurl}`);
  //       } else {
  //         routes.push(`/en/dictionary/word/${word.slug}`);
  //       }
  //     }

  //     let alltopics = [];

  //     for (const word of words) {
  //       if (word.topics && word.topics.length > 0) {
  //         for (const topic of word.topics) {
  //           if (topic !== null) {
  //             alltopics.push(topic);
  //           }
  //         }
  //       }
  //     }

  //     let uniquetopics = [...new Set(alltopics)].sort();

  //     for (const uniquetopic of uniquetopics) {
  //       routes.push(`/en/dictionary/topic/${uniquetopic}`);
  //     }

  //     return routes;
  //   }
  // },

  'nuxt-buefy': {
    defaultTrapFocus: true,
    defaultModalScroll: true,
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
  }
}
