import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Ad from '@/views/ads/Ad'
import AdList from '@/views/ads/AdList'
import NewAd from '@/views/ads/NewAd'
import Login from '@/views/auth/Login'
import Registration from '@/views/auth/Registration'
import Orders from '@/views/user/Orders'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'Ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'AdList',
      component: AdList
    },
    {
      path: '/new',
      name: 'NewAd',
      component: NewAd
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },

  ],
  mode: 'history'
})
