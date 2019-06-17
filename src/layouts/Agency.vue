<template>
  <div class="layout">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import '../assets/styles/agency/agency.scss';
import NavBar from '../components/Agency/NavBar.vue';
import Footer from '../components/Agency/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
