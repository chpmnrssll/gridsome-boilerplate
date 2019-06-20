<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container text-center">
      <h2 class="font-weight-bold mb-4">Values</h2>
      <h1 class="font-weight-bold mb-4">Flexibility & Freedom</h1>
      <hr class="my-4" />
      <SequentialEntrance animation="entranceFromTop" class-name="row py-4">
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/freedom-icon.png" alt="Freedom" />
          <h3 class="pb-2">Freedom</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/you-own-it-icon.png" alt="Ownership" />
          <h3 class="pb-2">You Own It</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/flexibility-icon.png" alt="Flexibility" />
          <h3 class="pb-2">Flexibility</h3>
          <p>
            Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
            consequat ipsum nec.
          </p>
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
  flex: 1 0 auto;
  min-height: 100%;
  width: 100%;
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
  font-size: 1.75rem;
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
</style>
