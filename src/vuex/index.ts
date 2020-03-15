// app
import manager from '@/vuex/modules/manager';

import category from '@/vuex/modules/category';
import author from '@/vuex/modules/author';
import theme from '@/vuex/modules/theme';
import collection from '@/vuex/modules/collection';
import resource from '@/vuex/modules/resource';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export * from './interfaces';

export default new Vuex.Store({
  modules: {
    manager,
    category,
    author,
    theme,
    collection,
    resource,
  },
});
