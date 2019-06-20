<template>
  <section class="d-flex flex-column justify-content-around">
    <div class="container text-center">
      <SequentialEntrance animation="entranceFromTop" class-name="row py-4">
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/address-icon.png" alt="Address" />
          <h3 class="pb-2">Address</h3>
          <p>123 Fifth Avenue, NY 10160</p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/mail-icon.png" alt="E-mail" />
          <h3 class="pb-2">E-mail</h3>
          <p>contact@webstudio.com</p>
        </div>
        <div class="col-sm text-center">
          <g-image class="pb-4" src="~/assets/images/phone-icon.png" alt="Phone" />
          <h3 class="pb-2">Phone</h3>
          <p>123 455 755</p>
        </div>
      </SequentialEntrance>
      <hr />
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
