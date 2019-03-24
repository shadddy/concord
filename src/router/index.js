import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import about from '@/page/about'
import service from '@/page/service'
import tool from '@/page/tool'
import location from '@/page/location'
import tpat from '@/page/tpat'
import VueRouter from 'vue-router';

Vue.use(Router)

const routes=[
  {
    path: '/',
    name: 'index',
    component: index,
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
    path:'/tpat',
    name:'tpat',
    component:tpat
  }
]

var router=new VueRouter({
  routes
})
export default router;