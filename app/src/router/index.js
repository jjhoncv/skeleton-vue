import Vue from 'vue'
import Router from 'vue-router'
import Home from '@app/src/components/Home'
import Contact from '@app/src/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
