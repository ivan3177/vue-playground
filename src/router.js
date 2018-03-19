import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index'
import ShoppingCart from './components/shopping-cart'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/sc',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
