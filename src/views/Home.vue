<template>
  <main-nav-vue />
</template>

<script lang="ts">
import MainNavVue from '@/components/navigation/Main.nav.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',

  components: {
    MainNavVue,
  },
});
</script>
