/**
 *
 */

import { JSONtestserver } from '../../services/temp_index';

import { AuthorF } from '../interfaces';
import {
  setArray,
  pushArray,
  updateValueArray,
  deleteValueArray,
} from '../generic';

import { ActionContext, Module } from 'vuex';

export interface AuthorStore {
  authors: AuthorF[];
}

const state: AuthorStore = {
  authors: [],
};

const getters = {

  GET_ALL(state: AuthorStore) {
    return state.authors;
  },

  COUNT: (state: AuthorStore) => {
    return state.authors.length;
  },

};

const mutations = {

  SET_AUTHORS: setArray('authors'),

  PUSH_AUTHOR: pushArray('authors'),

  UPDATE_AUTHOR: updateValueArray('authors'),

  DELETE_AUTHOR: deleteValueArray('authors'),

};

const actions = {

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
