import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery/dist/jquery'
import 'jquery-page/jquery.page'
import 'carousel/index'
import 'jquery-easing/dist/jquery.easing.1.3.umd'
import './assets/js/jquery.flexslider'
import './assets/js/mag'
import './assets/js/my-js-style.js'
import './assets/css/index.css'
import './assets/css/mystyle.css'
import './assets/css/reset.css'
import './assets/css/retable-f721744060.css'

Vue.config.productionTip = false;
Vue.prototype.$ = $;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
