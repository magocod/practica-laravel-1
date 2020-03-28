import { expect, assert } from 'chai';
import { createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import { Store } from 'vuex';
import { storeConfig, RootStore } from '@/vuex/store-config';

import { GenerateGenericList } from '../../../fixtures';

describe('Author.store.mutations', () => {

  let localVue: any;
  let store: Store<RootStore>;
  let listElements: any[];

  const testElements = 5;
  const newElement: any = { id: 100, other: '...' };
  const existElement: any = { id: 1, other: '...' };
  const updatedElement: any = { id: 3, other: 'updated' };

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    const cloneConfig = Object.assign({}, storeConfig);
    // console.log(cloneConfig);
    store = new Vuex.Store(cloneConfig);
    listElements = GenerateGenericList(testElements);
  });

  afterEach(() => {
    store.state.author.authors = [];
  });

  it('Mutation (SET_AUTHORS) (reemplazar listado elementos)', () => {
    expect(store.state.author.authors.length).to.equal(0);
    store.commit('author/SET_AUTHORS', listElements);
    expect(store.state.author.authors.length).to.equal(testElements);
  });

  it('Mutation (AUTHOR) (añadir elemento en listado (si no existe))', () => {
    store.state.author.authors = listElements;
    store.commit('author/PUSH_AUTHOR', newElement);
    expect(store.state.author.authors.length).to.equal(testElements + 1);
    const index = store.state.author.authors.indexOf(newElement);
    assert(index > -1, 'element not added');
    expect(index).to.equal(store.state.author.authors.length - 1);
  });

  it('Mutation (PUSH_AUTHOR) (no añadir elemento en listado (ya existe))', () => {
    store.state.author.authors = listElements;
    store.commit('author/PUSH_AUTHOR', existElement);
    expect(store.state.author.authors.indexOf(existElement)).to.equal(-1);
  });

  it('Mutation (UPDATE_AUTHOR) (actualizar elemento en listado)', () => {
    store.state.author.authors = listElements;
    store.commit('author/UPDATE_AUTHOR', updatedElement);
    const index = store.state.author.authors.indexOf(updatedElement);
    assert(index > -1, 'element not added');
    assert(
      JSON.stringify(store.state.author.authors[index]) === JSON.stringify(updatedElement),
      'element not updated',
    );
  });

  it('Mutation (DELETE_AUTHOR) (eliminar elemento en listado)', () => {
    store.state.author.authors = listElements;
    store.commit('author/DELETE_AUTHOR', updatedElement);
    expect(store.state.author.authors.length).to.equal(testElements - 1);
    expect(store.state.author.authors.indexOf(updatedElement)).to.equal(-1);
  });

});
