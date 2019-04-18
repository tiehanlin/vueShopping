import Vue from 'vue'
import Router from 'vue-router'
import proShopCartDemo from '@/components/proShopCartDemo'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'proShopCartDemo',
      component: proShopCartDemo
    },
		{
		  path: '/register',
		  name: 'register',
		  component: register
		}
  ]
})
