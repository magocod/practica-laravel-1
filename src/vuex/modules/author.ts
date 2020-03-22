/**
 *
 */

import { JSONtestserver, dbclient, firebaseexport } from '../../services';

import { AuthorF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

import { ActionContext, Module } from 'vuex';

export interface AuthorStore {
  authors: AuthorF[];
}

const state: AuthorStore = {
  authors: [],
};

const getters = {

  QUANTITY_RECORDS: (state: AuthorStore) => {
    return state.authors.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: any, payload: AuthorF[]) => {
    state.authors = payload;
  },

};

const actions = {

  async LOAD_ALL({ state, commit }: ActionContext<AuthorStore, any>) {
    try {
      const snapshot = await dbclient.collection('authors').get();
      if (snapshot.metadata.fromCache === true) {
        return Promise.reject('opteniendo del cache SDK, sin conexion a internet');
      } else {
        const array: AuthorF[] = [];
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

  async GET_ALL({ state, commit }: ActionContext<AuthorStore, any>) {
    try {
      const response = await JSONtestserver.get(`http://localhost:3000/authors`);
      commit('ADD_ARRAY', response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

};

export const author: Module<AuthorStore, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
