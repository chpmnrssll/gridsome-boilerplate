<template>
  <AgencyLayout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <h1>Pricing</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <Features>
      <template v-slot:header>
        <h2 class="font-weight-bold m-4">Features</h2>
        <h1 class="font-weight-bold m-4">US $499 One Time Payment</h1>
        <hr class="py-2" />
      </template>
    </Features>

    <PricingFeatures />
    <JoinTheClub />
  </AgencyLayout>
</template>

<script>
import FullScreenHero from '../../components/Agency/FullScreenHero.vue';
import Features from '../../components/Agency/Features.vue';
import PricingFeatures from '../../components/Agency/PricingFeatures.vue';
import JoinTheClub from '../../components/Agency/JoinTheClub.vue';

export default {
  components: {
    FullScreenHero,
    Features,
    PricingFeatures,
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
