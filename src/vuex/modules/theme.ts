/**
 *
 */

import { JSONtestserver } from '../../services/temp_index';

import { ItemF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

import { ActionContext, Module } from 'vuex';

export interface ThemeStore {
  themes: ItemF[];
}

const state: ThemeStore = {
  themes: [],
};

const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: ThemeStore) => {
    return state.themes.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: ThemeStore, payload: ItemF[]) => {
    state.themes = payload;
  },

};

const actions = {

  async GET_ALL({ state, commit }: ActionContext<ThemeStore, any>) {
    try {
      const response = await JSONtestserver.get(`http://localhost:3000/themes`);
      commit('ADD_ARRAY', response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

};

export const theme: Module<ThemeStore, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
