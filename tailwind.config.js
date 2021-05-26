module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      'content/**/*.md',
    ],
    options: {
      safelist: ['hover:tw-bg-facebook', 'hover:tw-bg-twitter', 'hover:tw-bg-linkedin', 'hover:tw-bg-pinterest']
    },
  },
  theme: {
    extend: {
      colors: {
        'facebook': '#3b5999',
        'twitter': '#55acee',
        'linkedin': '#0077B5',
        'pinterest': '#bd081c',
        'instagram': '#e4405f',
        'whatsapp': '#25D366',
        'youtube': '#cd201f',
        'telegram': '0088cc'
      },
    },
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
  prefix: 'tw-',
}
