import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/routes/home'
import Contacts from '@/routes/contacts'
import recoverAndSend from '@/routes/recoverAndSend'
import historic from '@/routes/historic'
import registration from '@/routes/registration'
import weAreGrp1 from '@/routes/weAreGrp1'
import Deconnexion from '@/routes/Deconnexion'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/acceuil',
      name: 'accueil',
      component: weAreGrp1,
      nav: true,
      auth: false
    },
    {
      path: '/Home',
      name: 'Connexion',
      component: Home,
      nav: true,
      auth: false
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: registration,
      nav: true,
      auth: false
    },
    {
      path: '/recoverAndSend',
      name: 'ROBOT',
      component: recoverAndSend,
      nav: true,
      auth: true
    },
    {
      path: '/historic',
      name: 'Historique',
      component: historic,
      nav: true,
      auth: true
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contacts,
      nav: true,
      auth: true
    },
    {
      path: '/deconnexion',
      name: 'Deconnexion',
      component: Deconnexion,
      nav: true,
      auth: true
    }
  ]
})
