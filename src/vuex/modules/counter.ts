/**
 *
 */

const state = {
  count: 0,
};

const getters = {

  /**
   * [GET_COUNT description]
   * @param  {[type]} state [description]
   * @return {number}       [description]
   */
  GET_COUNT(state: any): number {
    return state.count;
  },

};

const mutations = {

  INCREMENT(state: any) {
    state.count++;
  },

  DECREMENT(state: any) {
    state.count--;
  },

};

const actions = {

  async INCREMENT_COUNT({ commit }: any) {
    try {
      commit('INCREMENT');
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  },

  async DECREMENT_COUNT({ commit }: any) {
    try {
      commit('DECREMENT');
      return;
    } catch (error) {
      return Promise.reject(error);
    }
  },

};

export const counter = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
