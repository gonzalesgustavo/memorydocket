import { shallowMount } from '@vue/test-utils';
import MainNav from '@/components/navigation/Main.nav.vue';

describe('<MainNav /> | Tests', () => {
  describe('View', () => {
    const exec = () => {
      return shallowMount(MainNav, {});
    };
    it(`renders to the screen`, () => {
      const mainNav = exec();
      expect(mainNav.exists()).toBeTruthy();
    });
    it(`should render a button to login`, () => {
      const mainNav = exec();
      const loginBtn = mainNav.find('[label="login button"]');
      expect(loginBtn.exists()).toBeTruthy();
    });
    it(`should render a button to sign up`, () => {
      const mainNav = exec();
      const signUpBtn = mainNav.find('[label="sign up button"]');
      expect(signUpBtn.exists()).toBeTruthy();
    });
  });
});
