<template>
  <div>
    <main-nav-vue />
    <hero-vue sub="Memories shared are memories made..." />
  </div>
</template>

<script lang="ts">
import HeroVue from '@/components/decoration/Hero.vue';
import MainNavVue from '@/components/navigation/Main.nav.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',

  components: {
    MainNavVue,
    HeroVue,
  },
});
</script>
