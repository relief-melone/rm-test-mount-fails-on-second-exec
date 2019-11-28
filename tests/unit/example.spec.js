import { mount, createLocalVue } from '@vue/test-utils'
import BugExample from '@/components/BugExample.vue'
import { expect } from "chai";
import Vuetify from "vuetify";
import Vue from "vue";

const localVue = createLocalVue();
Vue.use(Vuetify);
global.requestAnimationFrame = cb => cb();

describe('BugExample.vue', () => {
  it.only('tests first thing', () => {
    
    const vuetify = new Vuetify();
    const wrapper = mount(BugExample, {
      localVue,
      vuetify,
      propsData: { value: [] }
    })

    console.log(wrapper.findAll('div').length);
    expect(true).to.be.true
  });


  it.only('tests second thing', () => {
    
    const vuetify = new Vuetify();
    const wrapper = mount(BugExample, {
      localVue,
      vuetify,
      propsData: { value: [] }
    })

    console.log(wrapper.findAll('div').length);
    expect(true).to.be.true
  });

  it.only('tests third thing', async () => {
    
    const vuetify = new Vuetify();
    const wrapper = mount(BugExample, {
      localVue,
      vuetify,
      propsData: { value: [] }
    })

    console.log(wrapper.findAll('div').length);
    expect(true).to.be.true
  });

  it.only('tests fourth thing', () => {
    
    const vuetify = new Vuetify();
    const wrapper = mount(BugExample, {
      vuetify,
      propsData: { value: [] }
    })

    console.log(wrapper.findAll('div').length);
    expect(true).to.be.true
  });
});
