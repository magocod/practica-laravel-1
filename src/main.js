// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//data de api -> pedir
import VueResource from 'vue-resource';
Vue.use(VueResource);

//import axios from 'axios';
//Vue.use(axios); 

//enlaces dentro de la aplicacion
import router from './router'

//framework vuetifiys
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

//vuex
import store from './vuex';



Vue.config.productionTip = false


//inyectar instancias a todos los componentes
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});




//forma basica
/* eslint-disable no-new */
/*
new Vue({
  //elemento afectado
  el: '#app',
  //enrutador
  router,
  components: { App },
  //plantilla html inicial
  template: '<App/>'
})
*/
