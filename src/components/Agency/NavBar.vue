<template>
  <b-navbar class="px-0" fixed="top" toggleable="md">
    <div class="container-fluid">
      <b-navbar-brand class="mx-4">
        <g-link to="/agency">
          <g-image alt="logo" immediate src="../../assets/images/logo.png" width="40" />
        </g-link>
      </b-navbar-brand>

      <b-navbar-toggle class="mx-4" target="nav_collapse">
        <span class="text-light hamburger-menu">=</span>
      </b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse" v-model="showCollapse">
        <b-navbar-nav class="ml-auto px-4">
          <b-nav-item>
            <g-link class="text-light" to="/agency">Home</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="text-light" to="/agency/about">About</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="text-light" to="/agency/websites">Websites</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="text-light" to="/agency/support">Support</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="text-light" to="/agency/Pricing">Pricing</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="text-light" to="/agency/blog">Blog</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="text-light" to="/agency/contact">Contact</g-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
/* eslint no-param-reassign: "error" */
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      showCollapse: false,
    };
  },
  computed: {
    ...mapGetters('user', {
      isLoggedIn: 'isLoggedIn',
    }),
  },
  watch: {
    showCollapse(val) {
      this.blurBackground(val);
    },
  },
  methods: {
    ...mapActions('user', {
      updateUser: 'updateUser',
    }),
    blurBackground(val) {
      document
        .getElementById('app')
        .querySelectorAll('section')
        .forEach(el => {
          el.style.filter = val ? 'blur(8px)' : '';
        });
    },
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

<style lang="scss" scoped>
nav {
  .hamburger-menu {
    -webkit-text-stroke: 1px #00000022;
    text-stroke: 1px #00000022;
    text-shadow: 1px 1px 1px #00000022;
  }
  .nav-link {
    @extend .hamburger-menu;
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }

  #nav_collapse {
    background-image: linear-gradient(180deg, #00000000 0%, #000000ee 100%);
    height: 100vh;
    transition: height 0.25s ease-out;

    @media (min-width: 640px) {
      background-image: none;
      height: auto;
      width: 100%;
    }
  }

  .active--exact {
    font-weight: bold;
  }
}
</style>
