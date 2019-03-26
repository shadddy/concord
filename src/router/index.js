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
    meta:{
      isIndex:true,
      title:'title.index'
    }
  },
  {
    path:'/about',
    name:'about',
    component:about,
    meta:{
      isIndex:false,
      title:'About'
    }
  },
  { 
    path:'/service',
    name:'services',
    component:service,
    meta:{
      isIndex:false,
      title:'Service'
    }
  },
  {
    path:'/tool',
    name:'tool',
    component:tool,
    meta:{
      isIndex:false,
      title:'Tool'
    }
  },
  {
    path:'/location',
    name:'location',
    component:location,
    meta:{
      isIndex:false,
      title:'Location'
    }
  },
  {
    path:'/tpat',
    name:'tpat',
    component:tpat,
    meta:{
      isIndex:false,
      title:'C-TPAT'
    }
  }
]

var router=new VueRouter({
  routes
})
export default router;