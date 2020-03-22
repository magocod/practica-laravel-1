/**
 *
 */

import { JSONtestserver, dbclient, firebaseexport } from '../../services';
import { ResourceF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

import { ActionContext, Module } from 'vuex';

export interface ResourceStore {
  resources: ResourceF[];
}

const state: ResourceStore = {
  resources: [],
};

const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: ResourceStore) => {
    return state.resources.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: ResourceStore, payload: ResourceF[]) => {
    state.resources = payload;
  },

};

const actions = {

  async BY_COLLECTION({ state, commit }: ActionContext<ResourceStore, any>, payload: string) {
    try {
      const snapshot = await dbclient.collection('resources').where(
        `collections.${payload}`, '==', true,
      ).get();
      if (snapshot.metadata.fromCache === true) {
        return Promise.reject('opteniendo del cache SDK, sin conexion a internet');
      } else {
        const array: ResourceF[] = [];
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

  async SEARCH_BY_TITLE({ state, commit }: ActionContext<ResourceStore, any>, payload: string) {
    try {
      const response = await JSONtestserver.get(
        `http://localhost:3000/items?title_like=${payload}`,
      );
      commit('ADD_ARRAY', response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

};

export const resource: Module<ResourceStore, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
