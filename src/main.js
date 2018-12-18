// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入font awesome图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare } from '@fortawesome/pro-light-svg-icons'
import { faGithub, faWeixin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelopeSquare, faGithub, faWeixin, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
var bus = new Vue()
Vue.use(bus)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
