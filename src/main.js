import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery/dist/jquery'
import $axios from 'axios'
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
Vue.prototype.$axios = $axios;
Vue.prototype.HOME = '/web';
$axios.create({
  baseURL: 'http://47.93.195.248:8080/planform/api/',
  headers: 'Access-Control-Allow-Origin:*'
});
// http://47.93.195.248:8080/planform/api/user/login?mobileNumber=17602438226&password=123456&rememberMe=0
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
