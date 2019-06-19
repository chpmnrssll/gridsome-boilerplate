<template>
  <section>
    <b-jumbotron
      class="d-flex flex-column justify-content-center align-items-center text-center"
      container-fluid
      text-variant="light"
    >
      <h2>CLASS APTEN</h2>
      <h1>A Bit of History</h1>
      <hr class="my-4" />
      <p>
        WEB_Studio was founded on principles of high standards, ethics, and genuine customer
        service.&nbsp;Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum
        auctor consequat ipsum nec sagittis vulputate cursus a sit amet mauris morbi accumsan ipsum
        velit. Nam tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
        auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris in erat justo.
      </p>
      <b-button @click="openCalendlyWidget" pill variant="primary">
        Schedule meeting
      </b-button>
      <g-image src="~/assets/images/bg-5.jpg" alt="" />
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
    background-image: linear-gradient(225deg, var(--primaryBlueA) 0%, var(--primaryGreenA) 65%);
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
      z-index: -1;
    }
  }
}
</style>
