<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container text-center">
      <h2 class="font-weight-bold mb-4">GRAVIDA NIBH VEL 5</h2>
      <h1 class="font-weight-bold mb-4">Bring your Business to Life Instantly</h1>
      <hr class="my-4" />
      <p class="my-4">
        Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor consequat
        ipsum nec sagittis vulputate cursus a sit amet mauris morbi accumsan ipsum velit.
      </p>
      <SequentialEntrance animation="entranceFromTop" class-name="row py-4">
        <div class="col-sm p-2 text-center">
          <g-image
            width="352"
            height="472"
            src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/11/agency2-free-img.jpg"
            class="animation-hover-float"
            alt=""
          />
          <h3 class="my-4">Agency</h3>
        </div>
        <div class="col-sm p-2 text-center">
          <g-image
            width="352"
            height="472"
            src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/make-up-artist-free-img.jpg"
            class="animation-hover-float"
            alt="Make-up artist screenshot"
          />
          <h3 class="my-4">Make-Up Artist</h3>
        </div>
        <div class="col-sm p-2 text-center">
          <g-image
            width="352"
            height="472"
            src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/co-working-space-free-img.jpg"
            class="animation-hover-float"
            alt="Co-working space screenshot"
          />
          <h3 class="my-4">Co-Working Space</h3>
        </div>
      </SequentialEntrance>

      <SequentialEntrance animation="entranceFromTop" class-name="row py-4">
        <div class="col-sm p-2 text-center">
          <g-image
            width="352"
            height="472"
            src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/fitness-trainer-free-img.jpg"
            class="animation-hover-float"
            alt=""
          />
          <h3 class="my-4">Fitness Trainer</h3>
        </div>
        <div class="col-sm p-2 text-center">
          <g-image
            width="352"
            height="472"
            src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/dj-free-img.jpg"
            class="animation-hover-float"
            alt="dj screenshot"
          />
          <h3 class="my-4">DJ</h3>
        </div>
        <div class="col-sm p-2 text-center">
          <g-image
            width="352"
            height="472"
            src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/wedding-img-free-img.jpg"
            class="animation-hover-float"
            alt="Wedding screenshot"
          />
          <h3 class="my-4">Wedding</h3>
        </div>
      </SequentialEntrance>
    </div>
  </section>
</template>

<script>
import SequentialEntrance from '../../../components/Agency/SequentialEntrance.vue';

export default {
  components: {
    SequentialEntrance,
  },
};
</script>

<style lang="scss" scoped>
section {
  flex: 1 0 auto;
  min-height: 100%;
  width: 100%;

  .animation-hover-float {
    transition-duration: 0.25s;
    transition-property: transform;
    transition-timing-function: ease-out;

    &:active,
    &:focus,
    &:hover {
      transform: translateY(-8px);
    }
  }

  .container {
    padding: 120px 0;
  }

  .g-image {
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 35px 73px -20px rgba(15, 78, 165, 0.24);
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
    color: var(--primaryBlue);
    font-family: 'Nunito', sans-serif;
    font-size: 100%;
    text-transform: uppercase;
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
