import {
  counter,
  theme,
  author,
  CounterStore,
  ThemeStore,
  AuthorStore,
} from './modules/temp_index';

import { Module } from 'vuex';

/**
 * Root store vuex
 */
export interface RootStore {
  counter: CounterStore;
  theme: ThemeStore;
  author: AuthorStore;
}

/**
 * [storeConfig description]
 * solo para pruebas
 * @type {Object}
 */
export const storeConfig: Module<any, RootStore> = {
  modules: {
    counter,
    theme,
    author,
  },
};
