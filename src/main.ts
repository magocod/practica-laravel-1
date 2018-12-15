import Vue from 'vue';
// componente principal
import App from './App.vue';
// estado de la aplicacion
import store from '@/vuex/index';
// enlaces dentro de la aplicacion
import router from '@/router/index';
// filtros
import filters from '@/filters/index';
// trabajadores de servicio
import './registerServiceWorker';
// estilos
import '@/plugins/vuetify';
// material icons
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// notificaciones
import '@/plugins/vuesnotify';

// instalar filtros
Vue.use(filters);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
