<template>
  <header class="header container-fluid p-0 position-absolute">
    <b-navbar class="px-0 py-4" toggleable="md" type="white">
      <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">
          <g-image class="logo-image" alt="logo" src="../../assets/images/logo.png" />
        </g-link>
        <g-link class="logo-home logo–mobile" to="/">
          <g-image class="logo-image" alt="logo" src="../../assets/images/logo.png" />
        </g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse">=</b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <g-link class="nav--link text-light" to="/agency">Home</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="nav--link text-light" to="/agency/about">About</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="nav--link text-light" to="/agency/websites">Websites</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="nav--link text-light" to="/agency/support">Support</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="nav--link text-light" to="/agency/Pricing">Pricing</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="nav--link text-light" to="/agency/blog">Blog</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="nav--link text-light" to="/agency/contact">Contact</g-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', {
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    ...mapActions('user', {
      updateUser: 'updateUser',
    }),
    triggerNetlifyIdentityAction(action) {
      if (action === 'login' || action === 'signup') {
        // this.$root.$options.netlifyIdentity.open(action);
        window.netlifyIdentity.open(action);
      } else if (action === 'logout') {
        // this.$root.$options.netlifyIdentity.logout();
        window.netlifyIdentity.logout();
        this.updateUser(null);
        // this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss">
$deepBlue: #0f4ea5;
$greenish: #0fa597;

.header {
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  z-index: 2;

  nav {
    padding-top: 1rem;
    width: 100%;
  }

  .navbar {
    max-width: 960px;
    margin: 0 auto 2rem;
    z-index: 4;
  }

  #nav_collapse.show {
    background-image: linear-gradient(200deg, #00000000 0%, #000000cc 80%);
    z-index: -1;
  }

  .nav--link {
    margin-left: 20px;

    @media (max-width: 419px) {
      margin: 0;
      padding: 15px 10px 10px 0;
    }
  }

  .active--exact {
    font-weight: bold;
  }

  .logo-home {
    font-size: 24px;
    font-weight: bold;
    max-width: 75%;

    &:hover {
      text-decoration: none;
    }
  }

  .logo-desktop {
    @media (max-width: 419px) {
      display: none;
    }
    @media (min-width: 420px) {
      display: default;
    }
  }

  .logo–mobile {
    @media (max-width: 419px) {
      display: default;
    }
    @media (min-width: 420px) {
      display: none;
    }
  }

  .logo-image {
    width: 40px;
  }
}
</style>
