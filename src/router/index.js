import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import about from '@/page/about'
import service from '@/page/service'
import tool from '@/page/tool'
import location from '@/page/location'
import part from '@/page/part'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/about',
      name:'about',
      component:about
    },
    {
      path:'/service',
      name:'services',
      component:service
    },
    {
      path:'/tool',
      name:'tool',
      component:tool
    },
    {
      path:'/location',
      name:'location',
      component:location
    },
    {
      path:'/part',
      name:'part',
      component:part
    }
  ]
})
