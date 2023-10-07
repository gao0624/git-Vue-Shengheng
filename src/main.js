import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';


// scss style
import './assets/scss/index.scss';

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// validate
Vue.use(Vuelidate);

// axios
Vue.use(VueAxios, axios);

//前面引入了组件 通过render渲染组件 然后挂载到#app 节点下面
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
