<template>
  <AgencyLayout>
    <Screen1 />
    <Screen2 />
    <Screen3 />
    <Screen4 />
    <Screen5 />
    <Screen6 />
    <Screen7 />
  </AgencyLayout>
</template>

<script>
import Screen1 from './home/Screen1.vue';
import Screen2 from './home/Screen2.vue';
import Screen3 from './home/Screen3.vue';
import Screen4 from './home/Screen4.vue';
import Screen5 from './home/Screen5.vue';
import Screen6 from './home/Screen6.vue';
import Screen7 from './home/Screen7.vue';

export default {
  components: {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
    Screen6,
    Screen7,
  },
  metaInfo: {
    title: 'Agency Layout',
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/chpmnrssll',
      });
    },
  },
};
</script>

<style lang="scss">
:root {
  --primaryBlue: #0f4ea5;
  --primaryGreen: #0fa597;
}
</style>
