// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSession from 'vue-session'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import LoadScript from 'vue-plugin-load-script'
import VeeValidate from 'vee-validate'
import translations from '@/assets/locales/translations'
import VueI18n from 'vue-i18n'

 

import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'

/* Unify */
// Import all css needed

/* Unify */
// Import all css needed for connexion page
import '@/assets/styles/inscription.css'

import '@/assets/vendor/unify/vendor/hamburgers/hamburgers.min.css'
import '@/assets/vendor/unify/vendor/animate.css'
import '@/assets/vendor/unify/css/unify-core.css'
import '@/assets/styles/custom_unify.css'

/* Unify */

/* Vue2Leaflet */
// Import css needed
import 'leaflet/dist/leaflet.css'

// Import all js needed
import '@/assets/vendor/unify/js/hs.core'
import '@/assets/vendor/unify/js/components/hs.header'
import '@/assets/vendor/unify/js/helpers/hs.hamburgers'


// $ object now exists:  $(“#el”)
// jQuery now exists:  jQuery(“#el”)
Vue.use(VueSession, {persist: true})
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(LoadScript)
Vue.use(VeeValidate)
Vue.use(VueI18n)

let language = navigator.language.split('-')[0]

const i18n = new VueI18n({
  fallbackLocale: 'fr',
  locale: language,
  messages: translations
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})

Vue.loadScript('https://smtpjs.com/v3/smtp.js')
  .then(() => {
    // Script is loaded, do something
  })
  .catch(() => {
    // Failed to fetch script
  })
