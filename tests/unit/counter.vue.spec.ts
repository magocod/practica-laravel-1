import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import Counter from '@/views/Counter/Counter.vue';

import Vuex from 'vuex';

import { storeConfig } from '@/vuex/store-config';

describe('Counter.vue', () => {

  it('hacer clic en el botón debe aumentar el recuento (local)', async () => {
    const wrapper = mount(Counter);
    expect(wrapper.vm.count).to.equal(0);
    const button = wrapper.find('button');
    button.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.count).to.equal(1);
  });

});
