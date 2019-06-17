<template>
  <section>
    <b-jumbotron
      class="d-flex flex-column justify-content-center align-items-center text-center"
      container-fluid
      text-variant="light"
    >
      <h2>gravida nibh vel 5</h2>
      <h1>Bring Your Business to Life Instantly</h1>
      <hr class="my-4" />
      <p>
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
        auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
        nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
      </p>
      <b-button @click="openCalendlyWidget" pill variant="primary">
        Schedule meeting
      </b-button>
      <g-image src="~/assets/images/bg-2.jpg" alt="" />
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
    position: absolute;
    // max-width: 960px;
    width: 100%;

    h1 {
      font-size: 3.125rem;
      font-family: 'Nunito', sans-serif;
    }
    h2 {
      font-size: 1.3125rem;
      font-family: 'Nunito', sans-serif;
      text-transform: uppercase;
      font-weight: 700;
    }
    hr {
      border-top-style: solid;
      border-top-width: 3px;
      border-top-color: #ffffff;
      width: 40px;
    }
    p {
      font-size: 100%;
      font-family: 'Nunito', sans-serif;
    }
    .btn {
      font-size: 100%;
      font-family: 'Nunito', sans-serif;
    }
  }
  .g-image {
    min-height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
}
</style>
