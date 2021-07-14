<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
:root {
  --font-festive: 'Festive', cursive;
  --font-merienda: 'Merienda', cursive;
}
</style>
