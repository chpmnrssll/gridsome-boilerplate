<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import '../assets/styles/default.scss';
import Footer from '../components/Default/Footer.vue';
import Header from '../components/Default/Header.vue';

export default {
  components: {
    Footer,
    Header,
  },
  mounted() {
    const scriptTag = document.createElement('script');
    document.getElementsByTagName('head')[0].appendChild(scriptTag);
    scriptTag.onload = () => {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/chpmnrssll',
        parentElement: document.getElementById('calendly-inline-widget'),
        text: 'Schedule a meeting',
        color: '#dde6e3',
        textColor: '#ffffff',
        branding: true,
      });
    };
    scriptTag.src = 'https://assets.calendly.com/assets/external/widget.js';
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

#content-wrapper {
  flex: 1 0 auto;
  max-width: 950px;
  width: 90vw;
  margin: 0 auto;
}
</style>
