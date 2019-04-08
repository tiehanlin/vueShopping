import Vue from 'vue'
import Router from 'vue-router'
import proShopCartDemo from '@/components/proShopCartDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'proShopCartDemo',
      component: proShopCartDemo
    }
  ]
})
