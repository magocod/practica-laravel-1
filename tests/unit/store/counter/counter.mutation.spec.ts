import { VueConstructor } from 'vue';

import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import { Store } from 'vuex';
import { storeConfig, RootStore } from '@/vuex/store-config';

describe('Counter.store.mutations', () => {

  let localVue: VueConstructor;
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
    store.commit('counter/INCREMENT');
    expect(store.state.counter.count).to.equal(1);
  });

  it('Mutation DECREMENT', () => {
    store.commit('counter/DECREMENT');
    expect(store.state.counter.count).to.equal(-1);
  });

});
