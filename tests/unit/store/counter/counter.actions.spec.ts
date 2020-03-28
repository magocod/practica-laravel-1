import { VueConstructor } from 'vue';

import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import { Store } from 'vuex';
import { storeConfig, RootStore } from '@/vuex/store-config';

describe('Counter.store.actions', () => {

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

  it('Action INCREMENT_COUNT', async () => {
    await store.dispatch('counter/INCREMENT_COUNT');
    expect(store.state.counter.count).to.equal(1);
  });

  it('Action DECREMENT_COUNT', async () => {
    await store.dispatch('counter/DECREMENT_COUNT');
    expect(store.state.counter.count).to.equal(-1);
  });

});
