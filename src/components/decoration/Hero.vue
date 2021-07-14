<template lang="pug">
 v-container
    .hero_background
        .hero_fill
        h3 {{ sub }}
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    sub: {
      type: String,
      default: 'Need to add sub for text',
    },
  },
});
</script>

<style lang="scss" scoped>
.hero_background {
  background: url('https://images.pexels.com/photos/5842/people-vintage-photo-memories.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .hero_fill {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.452);
  }
  h3 {
    color: white;
    z-index: 1009;
    font-size: 18pt;
    font-family: var(--font-merienda);
    letter-spacing: 2px;
    animation: fade 3s ease-in-out;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
    color: transparent;
  }
  100% {
    opacity: 1;
    color: white;
  }
}
</style>
