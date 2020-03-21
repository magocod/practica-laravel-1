/**
 * VUEX STORE
 */

import {
  manager,
} from './app';

import {
  author,
  category,
  collection,
  counter,
  resource,
  theme,
} from './modules';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export * from './interfaces';

export default new Vuex.Store({
  modules: {
    manager,
    author,
    category,
    collection,
    counter,
    resource,
    theme,
  },
});
