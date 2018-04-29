import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//importar modulos
import category from './modules/category'
import theme from './modules/theme'
import test from './modules/test'

export default new Vuex.Store({

   //modulos
  
  modules: {
    category,
    theme,
    test
  }

  
	
});