import { expect, assert } from 'chai';
import { createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import { Store } from 'vuex';
import { storeConfig, RootStore } from '@/vuex/store-config';

import { GenerateGenericList } from '../../../fixtures';

describe('Author.store.getters', () => {

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
    store.state.author.authors = listElements;
  });

  afterEach(() => {
    store.state.author.authors = [];
  });

  it('Getter (GET_ALL) (optener todos los elementos)', () => {
    expect(store.getters['author/GET_ALL']).to.equal(listElements);
  });

  it('Getter (COUNT) (añadir elemento en listado (si no existe))', () => {
    expect(store.getters['author/COUNT']).to.equal(testElements);
  });

});
