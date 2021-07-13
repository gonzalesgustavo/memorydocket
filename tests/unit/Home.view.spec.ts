import Home from '@/views/Home.vue';
import { mount, shallowMount } from '@vue/test-utils';

describe('<Home /> | tests', () => {
  describe('Views', () => {
    const exec = () => {
      return shallowMount(Home, {});
    };
    it(`renders to screen`, () => {
      const home = exec();
      expect(home.exists()).toBeTruthy();
    });
    it(`should render the nav bar`, () => {
      const home = mount(Home, {});
      const navBar = home.find('.container_nav');
      expect(navBar.exists()).toBeTruthy();
    });
  });
});
