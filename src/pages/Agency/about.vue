<template>
  <AgencyLayout>
    <Screen1 />
    <Screen2 />
    <Screen3 />
    <Screen4 />
    <Screen5 />
  </AgencyLayout>
</template>

<script>
import Screen1 from './about/Screen1.vue';
import Screen2 from './about/Screen2.vue';
import Screen3 from './about/Screen3.vue';
import Screen4 from './about/Screen4.vue';
import Screen5 from './about/Screen5.vue';

export default {
  components: {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
  },
  metaInfo: {
    title: 'About',
  },
};
</script>

<style lang="scss">
:root {
  --primaryBlue: #0f4ea5;
  --primaryBlueA: #0f4ea588;
  --primaryGreen: #0fa597;
  --primaryGreenA: #0fa59788;
}
section {
  transition: 0.25s filter ease-in-out;
}
</style>
