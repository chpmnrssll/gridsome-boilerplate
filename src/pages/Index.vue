<template>
  <Layout>
    <!-- <img class="greet-image" src="../../uploads/hello.svg" alt="greet-image" /> -->
    <b-carousel
      id="carousel-1"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide>
        <h1>Responsive Design</h1>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../../uploads/responsive.svg"
          alt="Responsive Design"
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <h1>Code Review</h1>
        <b-img fluid slot="img" src="../../uploads/code-review.svg" alt="Code Review" />
      </b-carousel-slide>

      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <h1>Adjustments</h1>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../../uploads/adjustments.svg"
          alt="Adjustments"
        />
      </b-carousel-slide>

      <b-carousel-slide>
        <h1>Profile</h1>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="../../uploads/profile.svg"
          alt="Profile"
        />
      </b-carousel-slide>
    </b-carousel>

    <h2 class="mb-4">Gridsome starter bootstrap</h2>
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
  width: 100%;
}
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
