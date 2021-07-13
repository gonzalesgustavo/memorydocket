import { shallowMount } from '@vue/test-utils';
import Hero from '@/components/decoration/Hero.vue';
describe('<Hero /> | Tests', () => {
  describe('View', () => {
    const exec = (sub?: string) => {
      return shallowMount(Hero, {
        propsData: {
          sub,
        },
      });
    };
    it(`should render to screen`, () => {
      expect(exec().exists()).toBeTruthy();
    });
    it(`should render text that has the title Memories`, () => {
      const wrapper = exec('Memories are made');
      expect(wrapper.text()).toContain('Memories');
    });
  });
});
