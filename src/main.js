import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;
// 把axios赋值给Vue原型对象的http
Vue.prototype.$http = axios;
// 写默认接口地址
axios.default.baseURL = 'http://127.0.0.1'


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');