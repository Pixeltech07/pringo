import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import axios from "axios";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const base = axios.create({
  baseURL: "http://51.38.224.116:3000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false
Vue.use(VueCookie)
Vue.use(VueSidebarMenu)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
