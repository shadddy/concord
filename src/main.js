// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n'
import '../static/font/font.css'
import '@/assets/css/basic.css'
import echarts from 'echarts'
import 'echarts/map/js/world.js'
Vue.use(VueI18n)
Vue.use(iView);
Vue.config.productionTip = false

Vue.prototype.$echarts=echarts
const i18n=new VueI18n({
	locale:'EN',
	messages:{
		'CN':require('./lang/cn'),
		'EN':require('./lang/en')
	}
})
router.afterEach((to,from)=>{
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
// router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
//   if (to.meta.title) {//判断是否有标题
//       document.title = to.meta.title
//       next()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
