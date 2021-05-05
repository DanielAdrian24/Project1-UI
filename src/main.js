import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueResource from 'vue-resource';
import { iconsSet as icons } from './assets/icons/icon'
// import { cilUser, cilLockLocked } from '@coreui/icons'
import CoreuiVue from '@coreui/vue';
import nav from './nav';

Vue.config.performance = true
Vue.use(VueResource)
Vue.use(CoreuiVue)
Vue.prototype.$navbar = nav;
// Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8000/api/'
Vue.prototype.$log = console.log.bind(console)


Vue.config.productionTip = false
const token = localStorage.getItem('token');
if (token) { 
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token 
}

store.dispatch('get_user', token)
.then(() => {
  new Vue({
    icons,
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}).catch((error) => {
  console.error(error);
})

