<template>
  <div id="auth-wrapper">
    <SideNav />
    <TheHeader />
    <div class="auth-pages">
      <router-view />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import SideNav from '@/components/layouts/SideNav.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'

export default Vue.extend({
  name: "App",
  components: {
    SideNav,
    TheHeader,
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: 'Rubik';
  src: url('./assets/fonts/Rubik-Regular.ttf') format('truetype');
}

$rubik: 'Rubik', sans-serif;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #121127;
  font-family: Rubik, Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  display: inline-block;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.auth-wrapper {
  display: flex;
}

.auth-pages {
  padding: 77px 0 20px 0;
  width: calc(100vw - 272px);
  margin: 0 0 0 auto;

  @media only screen and (max-width: 1100px) {
    width: 100vw;
    margin: 0 auto;
    padding: 0px 0 20px 0;
  }
}
</style>
