import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import about from '@/page/about'
import service from '@/page/service'
import tool from '@/page/tool'
import location from '@/page/location'
import tpat from '@/page/tpat'
import media from '@/page/media'
import career from '@/page/career'
import privacy from '@/page/privacy'
import faq from '@/page/faq'
import newsDetail from '@/page/newsDetail'
import quote from '@/page/quote'
import track from '@/page/track'

import VueRouter from 'vue-router';

Vue.use(Router)
const routes=[
  {
    path: '/',
    name: 'index',
    component: index,
    meta:{
      isIndex:true,
      title:'title.index',
      dataIndex:0
    }
  },
  {
    path:'/about',
    name:'about',
    component:about,
    meta:{
      isIndex:false,
      title:'About',
      dataIndex:1
    }
  },
  { 
    path:'/service',
    name:'services',
    component:service,
    meta:{
      isIndex:false,
      title:'Service',
      dataIndex:2
    }
  },
  {
    path:'/tool',
    name:'tool',
    component:tool,
    meta:{
      isIndex:false,
      title:'Tool',
      dataIndex:3
    }
  },
  {
    path:'/location',
    name:'location',
    component:location,
    meta:{
      isIndex:false,
      title:'Location',
      dataIndex:4
    }
  },
  {
    path:'/tpat',
    name:'tpat',
    component:tpat,
    meta:{
      isIndex:false,
      title:'C-TPAT',
      dataIndex:5
    }
  },
  {
    path:'/media',
    name:'media',
    component:media,
    meta:{
      isIndex:false,
      title:'media'
    }
  },
  {
    path:'/career',
    name:'career',
    component:career,
    meta:{
      isIndex:false,
      title:'career'
    }
  },
  {
    path:'/privacy',
    name:'privacy',
    component:privacy,
    meta:{
      isIndex:false,
      title:'privacy'
    }
  },
  {
    path:'/faq',
    name:'faq',
    component:faq,
    meta:{
      isIndex:false,
      title:'faq'
    }
  },
  {
    path:'/newsDetail',
    name:'newsDetail',
    component:newsDetail,
    meta:{
      isIndex:false,
      title:'newsDetail'
    }
  },
  {
    path:'/quote',
    name:'quote',
    component:quote,
    meta:{
      isIndex:false,
      title:'quote'
    }
  },
  {
    path:'/track',
    name:'track',
    component:track,
    meta:{
      isIndex:false,
      title:'track'
    }
  }
]

var router=new VueRouter({
  routes
})
export default router;