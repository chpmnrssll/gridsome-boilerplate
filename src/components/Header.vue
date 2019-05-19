<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md" type="light">
      <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">{{ $static.metaData.siteName }}</g-link>
        <g-link class="logo-home logo–mobile" to="/">
          <img class="logo-image" alt="logo" src="../assets/images/logo.png" />
        </g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <g-link class="nav--link" to="/about">About</g-link>
          <g-link class="nav--link" to="/blog">Blog</g-link>
          <g-link class="nav--link" to="/contact">Contact</g-link>
          <div v-if="isLoggedIn">
            <g-link to="/protected">Protected Page</g-link>
            <b-link class="ml-3" @click="triggerNetlifyIdentityAction('logout')">Log Out</b-link>
          </div>
          <div v-else>
            <b-link class="ml-3" @click="triggerNetlifyIdentityAction('login')">Log In</b-link>
            <b-link class="ml-3" @click="triggerNetlifyIdentityAction('signup')">Sign Up</b-link>
          </div>
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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', {
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    triggerNetlifyIdentityAction(action) {
      if (action === 'login' || action === 'signup') {
        this.$root.$options.netlifyIdentity.open(action);
      } else if (action === 'logout') {
        this.$root.$options.netlifyIdentity.logout();
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
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
</style>
