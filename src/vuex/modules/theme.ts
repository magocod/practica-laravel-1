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

  GET_ALL({ state, commit }: any) {
    // promesa
    return new Promise((resolve, reject) => {
      // usando intancia api
      JSONtestserver.get(`http://localhost:3000/themes`).then((response) => {
        resolve('exito en la consulta');
        // ejecutar mutaciones
        // console.log(response.data);
        commit('ADD_ARRAY', response.data);
      }).catch((error: any) => {
        reject(error);
      });
    });
  }, // ALL

};

export const theme = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
