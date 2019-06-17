<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container-fluid text-center">
      <div class="container h-25 d-flex flex-column">
        <h2 class="font-weight-bold m-4">CLASS APTENT TACITI</h2>
        <h1 class="font-weight-bold m-4">All You'll Ever Need is Right Here</h1>
        <hr class="py-2" />
      </div>

      <SequentialEntrance animation="entranceFromTop" class-name="row">
        <div class="col text-right">
          <div class="d-flex flex-column justify-content-around h-100">
            <div class="mb-5">
              <h3 class="pb-2">Highlighted Feature</h3>
              <p>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis amet
                nisi elit consequat ipsum
              </p>
            </div>
            <div class="mb-5">
              <h3 class="pb-2">Highlighted Feature</h3>
              <p>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis amet
                nisi elit consequat ipsum
              </p>
            </div>
            <div class="mb-5">
              <h3 class="pb-2">Highlighted Feature</h3>
              <p>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis amet
                nisi elit consequat ipsum
              </p>
            </div>
          </div>
        </div>

        <div class="col text-center">
          <g-image
            src="https://websitedemos.net/agency-04/wp-content/uploads/sites/68/2017/10/graphic-img-1-free-img.png"
            alt="Graphic Image"
          />
        </div>

        <div class="col text-left">
          <div class="d-flex flex-column justify-content-around h-100">
            <div class="mb-5">
              <h3 class="pb-2">Highlighted Feature</h3>
              <p>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis amet
                nisi elit consequat ipsum
              </p>
            </div>
            <div class="mb-5">
              <h3 class="pb-2">Highlighted Feature</h3>
              <p>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis amet
                nisi elit consequat ipsum
              </p>
            </div>
            <div class="mb-5">
              <h3 class="pb-2">Highlighted Feature</h3>
              <p>
                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis amet
                nisi elit consequat ipsum
              </p>
            </div>
          </div>
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
    // box-shadow: 0px 35px 73px -20px rgba(15, 78, 165, 0.24);
    max-width: 80vw;
    max-height: 100%;
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
