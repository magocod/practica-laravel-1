import {
  counter,
  theme,
  author,
  CounterStore,
  ThemeStore,
  AuthorStore,
} from './modules/temp_index';

import { manager, ManagerStore } from './app/manager';


import { Module } from 'vuex';

/**
 * Root store vuex
 */
export interface RootStore {
  counter: CounterStore;
  theme: ThemeStore;
  author: AuthorStore;
  manager: ManagerStore;
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
    manager,
  },
};
