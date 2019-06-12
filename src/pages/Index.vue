<template>
  <Layout>
    <b-carousel
      id="carousel-1"
      :interval="5000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide>
        <h1>Responsive Design</h1>
        <g-image
          class="carousel-image"
          slot="img"
          src="../../uploads/responsive.svg"
          alt="Responsive Design"
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <h1>Code Review</h1>
        <g-image
          class="carousel-image"
          slot="img"
          src="../../uploads/code-review.svg"
          alt="Code Review"
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <h1>Adjustments</h1>
        <g-image
          class="carousel-image"
          slot="img"
          src="../../uploads/adjustments.svg"
          alt="Adjustments"
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <h1>Profile</h1>
        <g-image class="carousel-image" slot="img" src="../../uploads/profile.svg" alt="Profile" />
      </b-carousel-slide>

      <b-carousel-slide>
        <h1>App</h1>
        <g-image class="carousel-image" slot="img" src="../../uploads/app.svg" alt="App" />
      </b-carousel-slide>

      <b-carousel-slide>
        <h1>Messages</h1>
        <g-image class="carousel-image" slot="img" src="../../uploads/text.svg" alt="Messages" />
      </b-carousel-slide>
    </b-carousel>

    <section id="about">
      <h3 class="mt-5 mb-4">About</h3>
      <p>
        This is a JAMstack boilerplate using Gridsome that comes with many features out of the box.
        It utilizes Bootstrap that is well known for powerful styling and layout. Ready to be
        deployed, automagically imports data to CMS and sets up your /admin page for easy access to
        edit your content.
      </p>
      <p>
        It is designed to use Netlify and Github which all have very fair free tier to their
        services, so you wont need to pay for monthly subscriptions and costly hosting fees.
      </p>
    </section>

    <section id="layout">
      <h3 class="mt-5 pt-mb-4">Layouts</h3>
      <g-link class="nav--link" to="/agency">Agency</g-link>
    </section>

    <section id="features">
      <h3 class="mt-5 pt-mb-4">Features</h3>
      <p>This starter project includes some of the latest powerful technologies.</p>

      <b-card-group deck>
        <b-card img-src="../../uploads/code-review.svg" img-alt="Built with" img-top>
          <b-card-title>Built with</b-card-title>
          <b-list-group flush>
            <b-list-group-item
              href="https://gridsome.org/"
              v-b-tooltip.hover.right
              title="A framework for JAMstack websites & PWAs based on Vue.js"
            >
              Gridsome
            </b-list-group-item>
            <b-list-group-item
              href="https://graphql.org/"
              v-b-tooltip.hover.right
              title="A powerful data query language for APIs that uses your existing data"
            >
              GraphQL
            </b-list-group-item>
            <b-list-group-item
              href="https://vuejs.org/"
              v-b-tooltip.hover.right
              title="A JavaScript framework for building user interfaces and single-page applications"
            >
              Vue.js
            </b-list-group-item>
            <b-list-group-item
              href="https://vuex.vuejs.org/"
              v-b-tooltip.hover.right
              title="A state management pattern & library for Vue.js applications"
            >
              Vuex
            </b-list-group-item>
          </b-list-group>
        </b-card>

        <b-card img-src="../../uploads/profile.svg" img-alt="Authoring" img-top>
          <b-card-title>Authoring</b-card-title>
          <b-list-group flush>
            <b-list-group-item
              href="https://www.markdownguide.org/"
              v-b-tooltip.hover.right
              title="A lightweight markup language with plain text formatting syntax that can be converted to many output formats"
            >
              Markdown
            </b-list-group-item>
            <b-list-group-item
              href="https://www.netlifycms.org/"
              v-b-tooltip.hover.right
              title="A CMS that gives non-technical users a simple way to edit and add content to any site built with a static site generator"
            >
              Netlify CMS
            </b-list-group-item>
            <b-list-group-item
              href="https://www.netlify.com/docs/identity/"
              v-b-tooltip.hover.right
              title="A full suite of authentication functionality, backed by the GoTrue API"
            >
              Netlify Identity
            </b-list-group-item>
          </b-list-group>
        </b-card>

        <b-card img-src="../../uploads/responsive.svg" img-alt="Responsive Design" img-top>
          <b-card-title>Styling</b-card-title>
          <b-list-group flush>
            <b-list-group-item
              href="https://sass-lang.com/"
              v-b-tooltip.hover.right
              title="A mature, stable, and powerful professional grade CSS extension language"
            >
              Sass
            </b-list-group-item>
            <b-list-group-item
              href="https://bootstrap-vue.js.org/"
              v-b-tooltip.hover.right
              title="One of the most comprehensive implementations of the Bootstrap 4.3 component and grid system for Vue.js"
            >
              Bootstrap Vue
            </b-list-group-item>
            <b-list-group-item
              href="https://gridsome.org/plugins/@gridsome/plugin-critical"
              v-b-tooltip.hover.right
              title="Extracts & inlines critical-path (above-the-fold) CSS"
            >
              Critical path CSS extraction
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>

      <b-card-group deck>
        <b-card img-src="../../uploads/adjustments.svg" img-alt="Data" img-left>
          <b-card-title>Data</b-card-title>
          <b-list-group flush>
            <b-list-group-item
              href="https://www.netlify.com/docs/form-handling/"
              v-b-tooltip.hover.right
              title="Form submission handling provided by Netlify"
            >
              Netlify Forms
            </b-list-group-item>
            <b-list-group-item
              href="https://analytics.google.com/analytics/web/"
              v-b-tooltip.hover.right
              title="A web analytics service offered by Google that tracks and reports website traffic"
            >
              Google Analytics
            </b-list-group-item>
            <b-list-group-item
              href="https://gridsome.org/plugins/@gridsome/plugin-sitemap"
              v-b-tooltip.hover.right
              title="Automatic sitemap generation for Gridsome sites"
            >
              Sitemap generator
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>
    </section>

    <SVGPolygon :targetID="'about'" />
  </Layout>
</template>

<script>
import SVGPolygon from '../components/SVGPolygon.vue';

export default {
  components: {
    SVGPolygon,
  },
  metaInfo: {
    title: 'Gridsome starter bootstrap',
  },
};
</script>

<style lang="scss" scoped>
#about {
  margin-bottom: 8rem;
  padding-bottom: 4rem;
}

.card {
  box-shadow: 2px 3px 4px #888;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 4px 6px 8px #aaa;
    transform: scale(1.02);
  }
}

.card-deck {
  margin-bottom: 2rem;
}

.card-img-top {
  padding: 1rem;
}

.card-img-left {
  background-size: cover;
  height: 100%;
  padding: 1rem;
  width: 50%;
}

.carousel-image {
  height: 75vh;
  width: 100%;
}
</style>
