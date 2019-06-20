<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container-fluid text-center">
      <div class="container d-flex flex-column mt-5 pt-5">
        <h2 class="font-weight-bold mb-4">CLASS APTEN</h2>
        <h1 class="font-weight-bold mb-4">Our Great Team</h1>
        <hr class="my-4" />
      </div>
      <div class="container py-5 px-0 px-md-2">
        <SequentialEntrance animation="entranceFromTop" class-name="row">
          <div class="col text-center mx-0 mx-md-2 mx-xl-4 mb-4">
            <g-image class="my-5" src="~/assets/images/team-member-1.png" />
            <h3 class="mb-2">George Warren</h3>
            <h4 class="mb-4">Web Master</h4>
            <p class="mb-4">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
              consequat ipsum nec sagittis vulputate cursus a sit amet mauris morbi.
            </p>
          </div>
          <div class="col text-center mx-0 mx-md-2 mx-xl-4 mb-4">
            <g-image class="my-5" src="~/assets/images/team-member-2.png" />
            <h3 class="mb-2">Jennifer Hudson</h3>
            <h4 class="mb-4">Computer Science</h4>
            <p class="mb-4">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
              consequat ipsum nec sagittis vulputate cursus a sit amet mauris morbi.
            </p>
          </div>
          <div class="col text-center mx-0 mx-md-2 mx-xl-4 mb-4">
            <g-image class="my-5" src="~/assets/images/team-member-3.png" />
            <h3 class="mb-2">Ronald Adams</h3>
            <h4 class="mb-4">UI Expert</h4>
            <p class="mb-4">
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
              consequat ipsum nec sagittis vulputate cursus a sit amet mauris morbi.
            </p>
          </div>
        </SequentialEntrance>
      </div>
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

  .col {
    background-color: #ffffff;
    box-shadow: 0px 30px 70px -30px var(--primaryBlueA);
    min-width: 18.75rem;
  }
  .g-image {
    border-radius: 100px;
    box-shadow: 0px 15px 30px -5px var(--primaryBlueA);
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
    font-size: 1.8125rem;
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
