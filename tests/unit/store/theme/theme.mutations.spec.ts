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
  const newElement: any = { id: 100, other: '...' };
  const existElement: any = { id: 1, other: '...' };
  const updatedElement: any = { id: 3, other: 'updated' };

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    const cloneConfig = Object.assign({}, storeConfig);
    // console.log(cloneConfig);
    store = new Vuex.Store(cloneConfig);
  });

  afterEach(() => {
    store.state.theme.themes = [];
  });

  it('Mutation (SET_THEMES) (reemplazar listado elementos)', () => {
    expect(store.state.theme.themes.length).to.equal(0);
    store.commit('theme/SET_THEMES', listElements);
    expect(store.state.theme.themes.length).to.equal(testElements);
  });

  it('Mutation (PUSH_THEME) (añadir elemento en listado (si no existe))', () => {
    store.commit('theme/PUSH_THEME', newElement);
    expect(store.state.theme.themes.length).to.equal(1);
    assert(store.state.theme.themes.indexOf(newElement) > -1, 'element not added');
  });

  it('Mutation (PUSH_THEME) (no añadir elemento en listado (ya existe))', () => {
    store.state.theme.themes = listElements;
    store.commit('theme/PUSH_THEME', existElement);
    expect(store.state.theme.themes.indexOf(existElement)).to.equal(-1);
  });

  it('Mutation (UPDATE_THEME) (actualizar elemento en listado)', () => {
    store.state.theme.themes = listElements;
    store.commit('theme/UPDATE_THEME', updatedElement);
    const index = store.state.theme.themes.indexOf(updatedElement);
    assert(index > -1, 'element not added');
    assert(
      JSON.stringify(store.state.theme.themes[index]) === JSON.stringify(updatedElement),
      'element not updated',
    );
  });

  it('Mutation (DELETE_THEME) (eliminar elemento en listado)', () => {
    store.state.theme.themes = listElements;
    store.commit('theme/DELETE_THEME', updatedElement);
    expect(store.state.theme.themes.length).to.equal(testElements - 1);
    expect(store.state.theme.themes.indexOf(updatedElement)).to.equal(-1);
  });

});
