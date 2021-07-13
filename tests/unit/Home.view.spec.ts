import Home from '@/views/Home.vue';
import { mount, shallowMount } from '@vue/test-utils';

describe('<Home /> | tests', () => {
  describe('Views', () => {
    const exec = () => {
      return shallowMount(Home, {});
    };
    it(`renders to screen`, () => {
      const wrapper = exec();
      expect(wrapper.exists()).toBeTruthy();
    });
    it(`should render the nav bar`, () => {
      const wrapper = mount(Home, {});
      const navBar = wrapper.find('.container_nav');
      expect(navBar.exists()).toBeTruthy();
    });
    it(`should render a hero onto the page`, () => {
      const wrapper = mount(Home, {});
      const hero = wrapper.find('.hero_background');
      expect(hero.exists()).toBeTruthy();
    });
  });
});
