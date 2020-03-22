/**
 *
 */

import { JSONtestserver, dbclient, firebaseexport } from '../../services';

import { ItemF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

const state = {

  categories: [] as ItemF[],

};

const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: any) => {
    return state.categories.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: any, payload: ItemF[]) => {
    state.categories = payload;
  },

};

const actions = {

  async LOAD_ALL({ state, commit }: any) {
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

  async GET_ALL({ state, commit }: any) {
    try {
      const response = await JSONtestserver.get(`http://localhost:3000/categories`);
      commit('ADD_ARRAY', response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

};

export const category = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
