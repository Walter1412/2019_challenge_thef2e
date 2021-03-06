const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? { router: { base: '/<repository-name>/' } }
    : {}

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans|Press+Start+2P&display=swap',
        rel: 'stylesheet'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    {
      src: 'normalize.css'
    },
    {
      src: 'assets/styles/app.styl',
      lang: 'stylus'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/mixin.js', ssr: false }],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/eslint-module'],
  /*
   ** Build configuration
  //  */
  // build: {
  //   /*
  //    ** You can extend webpack config here
  //    */
  //   extend(config, ctx) {},

  // }
  ...routerBase
}
