<template>
  <footer class="">
    <div class="outer-container container-fluid px-5">
      <div class="row">
        <div class="about-us col-lg-6 my-5">
          <h3 class="mb-4">About Us</h3>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
          </p>
          <p>
            nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a
            odio tincidunt auctor a ornare odio.
          </p>
        </div>
        <div class="col-lg-3 my-5">
          <h3 class="mb-4">Our Services</h3>
          <div class="d-flex flex-column services">
            <g-link>Gravida Nibh Vel Velit</g-link>
            <g-link>Auctor Aliquet</g-link>
            <g-link>Sollicitudin Lorem</g-link>
            <g-link>Quis Bibendum Auctor</g-link>
          </div>
        </div>
        <div class="col-lg-3 my-5">
          <h3 class="mb-4">Web Studio</h3>
          <address class="d-flex flex-column">
            <span>123 Fifth Avenue, NY 10160</span>
            <a href="mailto:web@studio.com">web@studio.com</a>
            <a href="tel:+13115552368">(311) 555-2368</a>
          </address>
        </div>
      </div>
    </div>
    <div class="bottom container-fluid p-0 p-lg-5">
      <div class="row d-flex justify-content-between m-0 m-lg-2">
        <div class="col-lg mb-5 mb-lg-0 p-0">
          <span>Copyright © 2017 Web Studio</span>
          <span>|</span>
          <g-link to="/agency">Credits</g-link>
        </div>
        <div class="col-lg text-right p-0">
          <g-link to="/admin">Netlify CMS</g-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: #ffffff;

  h3 {
    color: #0f4ea5;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  outer-container {
    margin: 60px auto;
  }
  .about-us {
    p {
      color: #8192aa;
      line-height: 1.5rem;
    }
  }
  .services {
    line-height: 1.5rem;
    a {
      color: #8192aa;
      &::before {
        content: '\26FD';
        font-size: 1.25rem;
        margin-right: 0.75rem;
      }
    }
  }
  address {
    line-height: 2rem;
    span {
      color: #8192aa;
      &:before {
        content: '\1F3E2';
        margin-right: 0.75rem;
      }
    }
    a[href^='mailto'] {
      color: #20c997;
      &:before {
        content: '\1F4E8';
        margin-right: 0.75rem;
      }
    }
    a[href^='tel'] {
      color: #8192aa;
      &:before {
        content: '\1F4DE';
        margin-right: 0.75rem;
      }
    }
  }
  .bottom {
    background-color: #f4f9f9;
    color: #8192aa;
    a {
      color: #20c997;
    }
  }
}
</style>
