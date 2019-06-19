<template>
  <section>
    <b-jumbotron
      class="d-flex flex-column justify-content-center align-items-center text-center"
      container-fluid
      text-variant="light"
    >
      <h1>About</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention
        to featured content or information.
      </p>
      <b-button @click="openCalendlyWidget" pill variant="primary">
        Schedule meeting
      </b-button>
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
    position: absolute;
    width: 100%;

    h1 {
      font-size: 3.125rem;
      font-family: 'Nunito', sans-serif;
    }
    p {
      font-size: 1.3125rem;
      font-weight: 600;
      font-family: 'Nunito', sans-serif;
    }
    .btn {
      font-size: 100%;
      font-family: 'Nunito', sans-serif;
    }
    .g-image {
      left: 0;
      min-height: 100%;
      object-fit: cover;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
}
</style>
