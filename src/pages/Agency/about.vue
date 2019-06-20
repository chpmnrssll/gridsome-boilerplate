<template>
  <AgencyLayout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <h1>About</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <OurTeam />

    <FullScreenHero :overlay="true">
      <template v-slot:background>
        <g-image src="~/assets/images/bg-5.jpg" alt="" />
      </template>
      <template v-slot:body>
        <h2>CLASS APTEN</h2>
        <h1>A Bit of History</h1>
        <hr class="my-4" />
        <p>
          WEB_Studio was founded on principles of high standards, ethics, and genuine customer
          service.&nbsp;Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum
          auctor consequat ipsum nec sagittis vulputate cursus a sit amet mauris morbi accumsan
          ipsum velit. Nam tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
          consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Mauris in erat justo.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <Testimonials />
    <JoinTheClub />
  </AgencyLayout>
</template>

<script>
import FullScreenHero from '../../components/Agency/FullScreenHero.vue';
import OurTeam from '../../components/Agency/OurTeam.vue';
import Testimonials from '../../components/Agency/Testimonials.vue';
import JoinTheClub from '../../components/Agency/JoinTheClub.vue';

export default {
  components: {
    FullScreenHero,
    OurTeam,
    Testimonials,
    JoinTheClub,
  },
  metaInfo: {
    title: 'About',
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chpmnrssll' });
    },
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
