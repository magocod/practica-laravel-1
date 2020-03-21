import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import { storeConfig } from '@/vuex/store-config';

describe('Counter.store', () => {

  let localVue: any;
  let store: any;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    const cloneConfig = Object.assign({}, storeConfig);
    // console.log(cloneConfig);
    store = new Vuex.Store(cloneConfig);
  });

  it('mutacion INCREMENT', () => {
    expect(store.getters['counter/GET_COUNT']).to.equal(0);
    store.commit('counter/INCREMENT');
    expect(store.getters['counter/GET_COUNT']).to.equal(1);
  });

  it('mutacion DECREMENT', () => {
    expect(store.getters['counter/GET_COUNT']).to.equal(1);
    store.commit('counter/DECREMENT');
    expect(store.getters['counter/GET_COUNT']).to.equal(0);
  });

  it('action INCREMENT_COUNT', async () => {
    expect(store.getters['counter/GET_COUNT']).to.equal(0);
    await store.dispatch('counter/INCREMENT_COUNT');
    expect(store.getters['counter/GET_COUNT']).to.equal(1);
  });

  it('action DECREMENT_COUNT', async () => {
    expect(store.getters['counter/GET_COUNT']).to.equal(1);
    await store.dispatch('counter/DECREMENT_COUNT');
    expect(store.getters['counter/GET_COUNT']).to.equal(0);
  });

});
