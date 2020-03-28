import { VueConstructor } from 'vue';

import { expect } from 'chai';
import { createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import { Store } from 'vuex';
import { storeConfig, RootStore } from '@/vuex/store-config';

describe('Counter.store.getters', () => {

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

  it('Getter GET_COUNT', () => {
    const value = 10;
    store.state.counter.count = value;
    expect(store.getters['counter/GET_COUNT']).to.equal(value);
  });

});
