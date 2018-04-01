// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//data de api -> pedir
import VueResource from 'vue-resource';
Vue.use(VueResource);

//enlaces dentro de la aplicacion
import router from './router'
//framework
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //elemento afectado
  el: '#app',
  //enrutador
  router,
  components: { App },
  //plantilla html inicial
  template: '<App/>'
})
