<template>
  <section>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/bg-4.png" alt="" />
      </template>
      <template v-slot:body>
        <h1 class="my-2">Are You Ready To Join The Club?</h1>
        <hr class="my-4" />
        <p class="mb-4">
          Get a free quote from one of our consultants to discuss which option would work best for
          your needs
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>
  </section>
</template>

<script>
import FullScreenHero from './FullScreenHero.vue';

export default {
  components: {
    FullScreenHero,
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chpmnrssll' });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  flex: 1 0 auto;
  min-height: 100%;
  width: 100%;
}
h1 {
  font-family: 'Nunito', sans-serif;
  font-size: 2.3125rem;
  font-weight: 700;
}
h2 {
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
}
hr {
  border-top-style: solid;
  border-top-width: 3px;
  border-top-color: #ffffff;
  width: 40px;
}
p {
  font-family: 'Nunito', sans-serif;
  font-size: 100%;
}
</style>
