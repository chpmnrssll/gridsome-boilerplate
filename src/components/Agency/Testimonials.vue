<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container-fluid text-center">
      <div class="container h-25 d-flex flex-column">
        <h2 class="font-weight-bold">CLASS APTENT</h2>
        <h1 class="font-weight-bold">Testimonials</h1>
        <hr />
      </div>

      <SequentialEntrance animation="entranceFromTop" class-name="row p-4">
        <div class="col-sm mb-4 p-0 p-sm-4 text-center">
          <g-image class="pb-4" src="~/assets/images/testimonial-avatar-1.png" alt="Avatar Image" />
          <p>
            “ Proin gravida nibh vel velit auctor aliquet aenean lorem sollicitudin, lorem quis
            bibendum auctor, nisi elit consequat ipsum nec sagittis sem nibh id elit duis sed odio
            sit amet nibh vulputate cursus a sit amet mauris. ”
          </p>
          <hr />
          <h3>Anonymous Latin speaker</h3>
          <h4>Florist</h4>
        </div>

        <div class="col-sm mb-4 p-0 p-sm-4 text-center">
          <g-image class="pb-4" src="~/assets/images/testimonial-avatar-2.png" alt="Avatar Image" />
          <p>
            “ Proin gravida nibh vel velit auctor aliquet aenean lorem sollicitudin, lorem quis
            bibendum auctor, nisi elit consequat ipsum nec sagittis sem nibh id elit duis sed odio
            sit amet nibh vulputate cursus a sit amet mauris. ”
          </p>
          <hr />
          <h3>Anonymous Latin speaker</h3>
          <h4>Designer</h4>
        </div>
      </SequentialEntrance>
    </div>
  </section>
</template>

<script>
import SequentialEntrance from './SequentialEntrance.vue';

export default {
  components: {
    SequentialEntrance,
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f7f9fb;
  flex: 1 0 auto;
  min-height: 100%;
  width: 100%;

  .container {
    padding: 120px 0;
  }

  h1 {
    color: var(--primaryBlue);
    font-family: 'Nunito', sans-serif;
    font-size: 2.3125rem;
  }
  h2 {
    color: var(--primaryGreen);
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
  }
  h3 {
    color: var(--primaryGreen);
    font-family: 'Nunito', sans-serif;
    font-size: 1.3125rem;
  }
  h4 {
    color: var(--primaryBlue);
    font-family: 'Nunito', sans-serif;
    font-size: 0.9375rem;
  }
  hr {
    border-top-style: solid;
    border-top-width: 3px;
    border-top-color: var(--primaryGreen);
    width: 40px;
  }
  p {
    color: #8192aa;
    font-family: 'Nunito', sans-serif;
    font-size: 100%;
  }
}
</style>
