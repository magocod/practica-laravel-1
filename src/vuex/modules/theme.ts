/**
 *
 */

import { JSONtestserver } from '../../services/temp_index';

import { ItemF } from '../interfaces';

import {
  ADD_ARRAY,
} from '../mutation-types';

const state = {

  themes: [] as ItemF[],

};

const getters = {

  // recursos cantidad (array)
  QUANTITY_RECORDS: (state: any) => {
    return state.themes.length;
  },

};

const mutations = {

  [ADD_ARRAY]: (state: any, payload: ItemF[]) => {
    state.themes = payload;
  },

};

const actions = {

  async GET_ALL({ state, commit }: any) {
    try {
      const response = await JSONtestserver.get(`http://localhost:3000/themes`);
      commit('ADD_ARRAY', response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },

};

export const theme = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
