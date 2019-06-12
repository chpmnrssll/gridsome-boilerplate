<template>
  <AgencyLayout>
    <section class="above-fold hero-section">
      <b-jumbotron class="text-center" text-variant="light" container-fluid fluid>
        <template slot="header">
          Instant JAMstack Websites
        </template>
        <template slot="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </template>
        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>
        <b-button pill variant="primary" @click="openCalendlyWidget">Schedule meeting</b-button>
      </b-jumbotron>
      <div class="background-image__first hero-bg position-relative" />
    </section>

    <section class="white-space">
      <div class="outer-container">
        <div class="container mb-5 pb-5 text-center">
          <h6 class="font-weight-bold greenish">GRAVIDA NIBH VEL 5</h6>
          <h2 class="font-weight-bold deepBlue">Flexibility & Freedom</h2>
        </div>
        <div class="row">
          <div class="col-sm text-center">
            <g-image class="pb-4" src="~/assets/images/freedom-icon.png" />
            <h3 class="pb-2 deepBlue">Freedom</h3>
            <p>
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
              consequat ipsum nec.
            </p>
          </div>
          <div class="col-sm text-center">
            <g-image class="pb-4" src="~/assets/images/you-own-it-icon.png" />
            <h3 class="pb-2 deepBlue">You Own It</h3>
            <p>
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
              consequat ipsum nec.
            </p>
          </div>
          <div class="col-sm text-center">
            <g-image class="pb-4" src="~/assets/images/flexibility-icon.png" />
            <h3 class="pb-2 deepBlue">Flexibility</h3>
            <p>
              Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor
              consequat ipsum nec.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-section">
      <b-jumbotron class="text-center" text-variant="light" container-fluid fluid>
        <template slot="header">
          Bring Your Business to Life Instantly
        </template>
        <template slot="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </template>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>
        <b-button pill variant="primary" @click="openCalendlyWidget">Schedule meeting</b-button>
        <div class="background-image bg-2" />
      </b-jumbotron>
    </section>
  </AgencyLayout>
</template>

<script>
import SequentialEntrance from '../../components/Agency/SequentialEntrance.vue';

export default {
  components: {
    SequentialEntrance,
  },
  metaInfo: {
    title: 'Agency Layout',
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/chpmnrssll',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$deepBlue: #0f4ea5;
$greenish: #0fa597;

.deepBlue {
  color: $deepBlue;
}
.greenish {
  color: $greenish;
}

.hero-section {
  flex: 1 0 auto;
  height: 100%;
  width: 100%;

  .jumbotron {
    background-color: transparent;
    min-height: 100%;
    padding: 8rem 1rem;
    position: absolute;
    // max-width: 960px;
    width: 100%;

    h1 {
      // font-size: 3.125rem;
      font-size: 4vw;
    }
    .lead {
      font-size: 2vw;
    }
  }

  .hero-bg {
    background-image: url('../../assets/images/hero-bg.png');
  }
  .bg-2 {
    background-image: url('../../assets/images/bg-2.jpg');
  }

  .background-image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -2;

    &:after {
      background-image: linear-gradient(225deg, $deepBlue 0%, $greenish 65%);
      content: '';
      left: 0;
      height: 100%;
      position: absolute;
      opacity: 0.6;
      width: 100%;
      z-index: -1;
    }
  }

  .background-image__first {
    @extend .background-image;
    &:after {
      background-image: linear-gradient(225deg, $greenish 0%, $deepBlue 65%);
      mix-blend-mode: color;
      opacity: 1;
    }
  }
}

.white-space {
  .outer-container {
    min-height: 100%;
    padding: 8rem 2rem;
    width: 100%;
  }
}
</style>
