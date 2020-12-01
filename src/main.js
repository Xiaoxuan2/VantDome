import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './node_modules/bootstrap/dist/js/bootstrap.min.js';
Vue.use(Vant);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// 引入饿了么插件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(ElementUI);

