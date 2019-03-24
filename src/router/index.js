import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import about from '@/page/about'
import service from '@/page/service'
import tool from '@/page/tool'
import location from '@/page/location'
import tpat from '@/page/tpat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:this.$t("header.nav.nav1")
      },
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
})
