<template>
  <Layout>
    <b-carousel
      id="carousel-1"
      :interval="5000"
      controls
      indicators
      background="#ababab"
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

    <h3 class="mt-5 mb-4">About</h3>
    <p>
      This is a JAMstack boilerplate using Gridsome that comes with many features out of the box. It
      utilizes Bootstrap that is well known for powerful styling and layout. Ready to be deployed,
      automagically imports data to CMS and sets up your /admin page for easy access to edit your
      content.
    </p>

    <p>
      It is designed to use Netlify and Github which all have very fair free tier to their services,
      so you wont need to pay for monthly subscriptions and costly hosting fees.
    </p>

    <h3 class="mt-5 mb-4">Features</h3>
    <p>This starter project includes some of the latest powerful technologies.</p>
    <ul>
      <li><b>Gridsome - </b> Vue.js & GraphQL powered framework genrating static files.</li>
      <li>
        <b>Bootstrap & Bootstrap Vue - </b> Powerful styling and layout with styled Vue components.
      </li>
      <li><b>Sass - </b> Professional grade CSS extension with many features.</li>
      <li><b>Markdown - </b> Easy and widely used format for writing content.</li>
      <li><b>Netlify CMS - </b> CMS that uses the Github repo for storage.</li>
      <li><b>Netlify forms - </b> Netlify forms ready to be used after deployment.</li>
      <li><b>Google Analytics - </b> Just add your tracking ID in the config.</li>
      <li><b>Sitemap generator - </b> Automatically generates a sitemap.xml file.</li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Gridsome starter bootstrap',
  },
};
</script>

<style>
.carousel-image {
  height: 75vh;
  width: 100%;
}
</style>
