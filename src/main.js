// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'
import './assets/css/mystyle.css'
import './assets/css/reset.css'
import './assets/css/retable-f721744060.css'
import './assets/js/carousel.min.js'
import './assets/js/jquery.easing.min.js'
import './assets/js/jquery.flexslider-min.js'
import './assets/js/jquery.flexslider.js'
import './assets/js/jquery.page.js'
import './assets/js/jquery-1.10.2.js'
import './assets/js/mag.js'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
