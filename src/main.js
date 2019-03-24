// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import routes from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n'
import '../static/font/font.css'
import '@/assets/css/basic.css'


Vue.use(VueI18n)
Vue.use(iView);
Vue.config.productionTip = false

const router=new VueRouter({
  routes
})

const i18n=new VueI18n({
	locale:'EN',
	messages:{
		'CN':require('./lang/cn'),
		'EN':require('./lang/en')
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
