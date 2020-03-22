/**
 *
 */

import { JSONtestserver } from '../../services/temp_index';

import { ItemSql } from '../interfaces';

import { ActionContext, Module } from 'vuex';

export interface ThemeStore {
  themes: ItemSql[];
}

const state: ThemeStore = {
  themes: [],
};

const getters = {

  GET_ALL(state: ThemeStore) {
    return state.themes;
  },

  COUNT(state: ThemeStore): number {
    return state.themes.length;
  },

};

const mutations = {

  SET_THEMES(state: ThemeStore, payload: ItemSql[]) {
    state.themes = payload;
  },

  PUSH_THEME(state: ThemeStore, payload: ItemSql) {
    const value = state.themes.find((element) => {
      return element.id === payload.id;
    });
    if (value === undefined) {
      state.themes.push(payload);
    }
  },

  UPDATE_THEME(state: ThemeStore, payload: ItemSql) {
    const indexupdate = state.themes.findIndex((element) => {
      return element.id === payload.id;
    });
    if (indexupdate > -1) {
      state.themes.splice(indexupdate, 1, payload);
    }
  },

  DELETE_THEME(state: ThemeStore, payload: ItemSql) {
    const indexdelete = state.themes.findIndex((element) => {
      return element.id === payload.id;
    });
    if (indexdelete > -1) {
      state.themes.splice(indexdelete, 1);
    }
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
