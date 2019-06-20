<template>
  <AgencyLayout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" />
      </template>
      <template v-slot:body>
        <h1>Websites</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <WebsitesLong />
    <JoinTheClub />
  </AgencyLayout>
</template>

<script>
import FullScreenHero from '../../components/Agency/FullScreenHero.vue';
import WebsitesLong from '../../components/Agency/WebsitesLong.vue';
import JoinTheClub from '../../components/Agency/JoinTheClub.vue';

export default {
  components: {
    FullScreenHero,
    WebsitesLong,
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
