/**
 *
 */

import { ActionContext, Module } from 'vuex';

export interface CounterStore {
  count: number;
}

const state: CounterStore = {
  count: 0,
};

const getters = {

  /**
   * [GET_COUNT description]
   */
  GET_COUNT(state: CounterStore): number {
    return state.count;
  },

};

const mutations = {

  INCREMENT(state: CounterStore) {
    state.count++;
  },

  DECREMENT(state: CounterStore) {
    state.count--;
  },

};

const actions = {

  async INCREMENT_COUNT({ commit }: ActionContext<CounterStore, any>) {
    try {
      commit('INCREMENT');
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async DECREMENT_COUNT({ commit }: ActionContext<CounterStore, any>) {
    try {
      commit('DECREMENT');
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  },

};

export const counter: Module<CounterStore, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
