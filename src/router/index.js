import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page1/index'
import film from '@/components/page2/index'
import nf from '@/components/404'
import details from '@/components/common/details'
import city from '@/components/city'
import cinema from '@/components/page3/index'

Vue.use(Router)

var router =new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect:{'name':'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/film/:type',
      name: 'film',
      component: film,
      props:true
    },
    {
      path: '/films/:id',
      name: 'details',
      component: details,
      props:true
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
    path: '**',
    name: '404',
    component: nf
    }
  ]
})
export default router;