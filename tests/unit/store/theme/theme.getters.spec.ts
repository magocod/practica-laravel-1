import { expect, assert } from 'chai';
import { createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import { Store } from 'vuex';
import { storeConfig, RootStore } from '@/vuex/store-config';

import { GenerateGenericList } from '../../../fixtures';

describe('Theme.store.mutations', () => {

  let localVue: any;
  let store: Store<RootStore>;

  const testElements = 5;
  const listElements = GenerateGenericList(testElements);

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    const cloneConfig = Object.assign({}, storeConfig);
    // console.log(cloneConfig);
    store = new Vuex.Store(cloneConfig);
    store.state.theme.themes = listElements;
  });

  afterEach(() => {
    store.state.theme.themes = [];
  });

  it('Getter (GET_ALL) (optener todos los elementos)', () => {
    expect(store.getters['theme/GET_ALL']).to.equal(listElements);
  });

  it('Getter (COUNT) (añadir elemento en listado (si no existe))', () => {
    expect(store.getters['theme/COUNT']).to.equal(testElements);
  });

});
