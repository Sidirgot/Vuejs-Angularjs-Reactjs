import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Faq from '@/components/Faq'

Vue.use(Router)

export default new Router({
  // vue routes
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Faq',
      name: 'Faq',
      component: Faq
    }  
  ]
})
