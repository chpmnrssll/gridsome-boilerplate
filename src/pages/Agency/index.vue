<template>
  <AgencyLayout>
    <Screen1 />
    <Screen2 />
    <Screen3 />
    <Screen4 />
    <Screen5 />
    <Screen6 />
    <Screen7 />
    <Screen8 />
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
import Screen8 from './home/Screen8.vue';

export default {
  components: {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
    Screen6,
    Screen7,
    Screen8,
  },
  metaInfo: {
    title: 'Home',
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
