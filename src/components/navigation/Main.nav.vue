<template lang="pug">
.container_nav
    nav
        h2 Memory Docket
        .nav_actions
            v-btn(text small color="blue darken-2" label="login button") login
            v-btn(outlined rounded small color="purple darken-2" label="sign up button") Sign-up
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.container_nav {
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  nav {
    width: 95%;
    height: 90%;
    margin-top: 0.5rem;
    display: flex;
    padding: 0.2rem;
    border: 1px solid rgba(33, 73, 185, 0.623);
    border-radius: 25px;
    box-shadow: 1px 1px 15px rgba(35, 35, 150, 0.445) inset;
    background: linear-gradient(
      20deg,
      rgba(179, 179, 252, 0.329),
      rgba(22, 22, 117, 0.459)
    );
    h2 {
      font-family: var(--font-festive);
      letter-spacing: 3px;
      font-weight: 200;
      margin-left: 1rem;
      width: 85%;
    }
    .nav_actions {
      display: flex;
      padding-top: 0.2rem;
    }
  }
}
</style>
