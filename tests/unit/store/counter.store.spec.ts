import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import { Store } from 'vuex';
import { storeConfig, RootStore } from '@/vuex/store-config';

describe('Counter.store', () => {

  let localVue: any;
  let store: Store<RootStore>;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    const cloneConfig = Object.assign({}, storeConfig);
    // console.log(cloneConfig);
    store = new Vuex.Store(cloneConfig);
  });

  afterEach(() => {
    store.state.counter.count = 0;
  });

  it('Mutation INCREMENT', () => {
    expect(store.getters['counter/GET_COUNT']).to.equal(0);
    store.commit('counter/INCREMENT');
    expect(store.getters['counter/GET_COUNT']).to.equal(1);
  });

  it('Mutation DECREMENT', () => {
    expect(store.getters['counter/GET_COUNT']).to.equal(0);
    store.commit('counter/DECREMENT');
    expect(store.getters['counter/GET_COUNT']).to.equal(-1);
  });

  it('Action INCREMENT_COUNT', async () => {
    expect(store.getters['counter/GET_COUNT']).to.equal(0);
    await store.dispatch('counter/INCREMENT_COUNT');
    expect(store.getters['counter/GET_COUNT']).to.equal(1);
  });

  it('Action DECREMENT_COUNT', async () => {
    expect(store.getters['counter/GET_COUNT']).to.equal(0);
    await store.dispatch('counter/DECREMENT_COUNT');
    expect(store.getters['counter/GET_COUNT']).to.equal(-1);
  });

});
