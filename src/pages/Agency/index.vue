<template>
  <AgencyLayout>
    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/hero-bg.png" alt="" immediate />
      </template>
      <template v-slot:body>
        <h1>Instant JAMstack Websites</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <Values />

    <FullScreenHero :overlay="true">
      <template v-slot:background>
        <g-image src="~/assets/images/bg-2.jpg" alt="" />
      </template>
      <template v-slot:body>
        <h2>gravida nibh vel 5</h2>
        <h1>Bring Your Business to Life Instantly</h1>
        <hr class="my-4" />
        <p>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
          auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
          nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <WebsitesShort />

    <FullScreenHero :overlay="true">
      <template v-slot:background>
        <g-image src="~/assets/images/bg-3.jpg" alt="" />
      </template>
      <template v-slot:body>
        <h2>Proin gravida nibh vel velit auctor aliquet</h2>
        <h1>Spend More Time Doing What You Love</h1>
        <hr class="my-4" />
        <p>
          Make changes to your site easier than ever before with the latest revolutionary drag and
          drop editing software used by over 275,000 other website owners. No coding, no confusion,
          no frustration, just easy! Add in a whole new pre-designed section with just one click.
          Build an entirely new page in three clicks. See it change before your eyes.
        </p>
        <b-button @click="openCalendlyWidget" pill variant="primary">Schedule Meeting</b-button>
      </template>
    </FullScreenHero>

    <Features>
      <template v-slot:header>
        <h2 class="font-weight-bold m-4">Features</h2>
        <h1 class="font-weight-bold m-4">All You'll Ever Need is Right Here</h1>
        <hr class="py-2" />
      </template>
    </Features>

    <Testimonials />
    <JoinTheClub />
  </AgencyLayout>
</template>

<script>
import FullScreenHero from '../../components/Agency/FullScreenHero.vue';
import Values from '../../components/Agency/Values.vue';
import WebsitesShort from '../../components/Agency/WebsitesShort.vue';
import Features from '../../components/Agency/Features.vue';
import Testimonials from '../../components/Agency/Testimonials.vue';
import JoinTheClub from '../../components/Agency/JoinTheClub.vue';

export default {
  components: {
    FullScreenHero,
    Values,
    WebsitesShort,
    Features,
    Testimonials,
    JoinTheClub,
  },
  metaInfo: {
    title: 'Home',
  },
  methods: {
    openCalendlyWidget() {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chpmnrssll' });
    },
  },
};
</script>

<style lang="scss">
:root {
  --primaryBlue: #0f4ea5;
  --primaryBlueA: #0f4ea588;
  --primaryGreen: #0fa597;
  --primaryGreenA: #0fa59788;
}
section {
  transition: 0.25s filter ease-in-out;
}
</style>
