import colors from 'vuetify/es5/util/colors'

export default {
   ssr: true,
   target: 'static',
   head: {
      titleTemplate: '%s - test-jm-saas-app',
      title: 'test-jm-saas-app',
      htmlAttrs: {
         lang: 'en',
      },
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { hid: 'description', name: 'description', content: '' },
         { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
   },
   css: [],
   // plugins: [{ src: '@/plugins/auth-guard-plugin', ssr: false }],
   components: ['@/components/base'],
   buildModules: ['@nuxtjs/vuetify'],
   modules: ['@nuxtjs/axios'],
   router: {
      middleware: ['auth-guard-middleware'],
   },
   axios: {
      baseURL: '/',
   },
   vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
         dark: true,
         themes: {
            dark: {
               primary: colors.blue.darken2,
               accent: colors.grey.darken3,
               secondary: colors.amber.darken3,
               info: colors.teal.lighten1,
               warning: colors.amber.base,
               error: colors.deepOrange.accent4,
               success: colors.green.accent3,
            },
         },
      },
   },
   build: {},
}
