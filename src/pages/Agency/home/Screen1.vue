<template>
  <section>
    <b-jumbotron class="text-center" text-variant="light" container-fluid fluid>
      <template slot="header">
        Instant JAMstack Websites
      </template>
      <template slot="lead">
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention
        to featured content or information.
      </template>
      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>
      <b-button pill variant="primary" @click="openCalendlyWidget">Schedule meeting</b-button>
      <g-image src="~/assets/images/hero-bg.png" alt="" />
    </b-jumbotron>
  </section>
</template>

<script>
export default {
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

  .jumbotron {
    background-color: transparent;
    background-image: linear-gradient(225deg, var(--primaryBlue) 0%, var(--primaryGreen) 65%);
    min-height: 100%;
    padding: 8rem 1rem;
    position: absolute;
    // max-width: 960px;
    width: 100%;

    h1 {
      font-size: 4vw;
    }
    .lead {
      font-size: 2vw;
    }
    .g-image {
      min-height: 100%;
      left: 0;
      object-fit: cover;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
}
</style>
