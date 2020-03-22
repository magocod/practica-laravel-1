/**
 *
 */

import { JSONtestserver, dbclient, firebaseexport } from '../../services';

import { ItemF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

import { ActionContext, Module } from 'vuex';

export interface CategoryStore {
  categories: ItemF[];
}

const state: CategoryStore = {
  categories: [],
};

const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: CategoryStore) => {
    return state.categories.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: CategoryStore, payload: ItemF[]) => {
    state.categories = payload;
  },

};

const actions = {

  async LOAD_ALL({ state, commit }: ActionContext<CategoryStore, any>) {
    try {
      const snapshot = await dbclient.collection('categories').get();
      if (snapshot.metadata.fromCache === true) {
        return Promise.reject('opteniendo del cache SDK, sin conexion a internet');
      } else {
        const array: ItemF[] = [];
        snapshot.forEach((doc) => {
          const ob: any = firebaseexport(doc.data(), doc.id);
          array.push(ob);
        });
        // actualizar estado de la app
        commit('ADD_ARRAY', array);
        return 'conexion exitosa';
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async GET_ALL({ state, commit }: ActionContext<CategoryStore, any>) {
    try {
      const response = await JSONtestserver.get(`http://localhost:3000/categories`);
      commit('ADD_ARRAY', response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

};

export const category: Module<CategoryStore, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
