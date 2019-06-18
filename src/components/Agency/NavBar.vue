<template>
  <b-navbar class="px-0" :class="{ 'hidden-navbar': !showNavbar }" fixed="top" toggleable="md">
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

const OFFSET = 40;

export default {
  data() {
    return {
      showNavbar: true,
      showCollapse: false,
      lastScrollPosition: 0,
      scrollValue: 0,
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
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    ...mapActions('user', {
      updateUser: 'updateUser',
    }),
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
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
.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}

nav {
  background-image: linear-gradient(225deg, #0f4ea522, #0fa59700);
  transform: translate3d(0, 0, 0);
  transition: 0.1s transform linear;

  .hamburger-menu {
    text-shadow: 0px 1px 2px #aaaaaa88, 1px 2px 3px #00000088;
  }
  .nav-link {
    @extend .hamburger-menu;
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }
  .container-fluid {
    max-width: 1240px;
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
