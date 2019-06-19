<template>
  <section>
    <b-jumbotron
      class="d-flex flex-column justify-content-center align-items-center text-center"
      container-fluid
      text-variant="light"
    >
      <hr class="my-4" />
      <h1 class="my-2">Are You Ready To Join The Club?</h1>
      <p class="mb-4">
        Get a free quote from one of our consultants to discuss which option would work best for
        your needs
      </p>
      <b-button class="my-4" @click="openCalendlyWidget" pill variant="primary">
        Schedule meeting
      </b-button>
      <g-image src="~/assets/images/bg-4.png" alt="" />
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
    background-image: linear-gradient(225deg, var(--primaryGreen) 0%, var(--primaryBlue) 65%);
    min-height: 100%;
    overflow: hidden;
    position: absolute;
    width: 100%;

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
    .btn {
      font-family: 'Nunito', sans-serif;
      font-size: 100%;
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
