<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md" type="light">
      <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">
          <img class="logo-image" alt="logo" src="../assets/images/logo.png" />
        </g-link>
        <g-link class="logo-home logo–mobile" to="/">
          <img class="logo-image" alt="logo" src="../assets/images/logo.png" />
        </g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <g-link class="nav--link" to="/about">About</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="nav--link" to="/blog">Blog</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="nav--link" to="/contact">Contact</g-link>
          </b-nav-item>
          <b-nav-item v-if="isLoggedIn">
            <g-link class="ml-3" to="/protected">Protected Page</g-link>
          </b-nav-item>
          <b-nav-item v-if="isLoggedIn">
            <b-link class="ml-3" @click="triggerNetlifyIdentityAction('logout')">Log Out</b-link>
          </b-nav-item>
          <b-nav-item v-else>
            <b-link class="ml-3" @click="triggerNetlifyIdentityAction('login')">Log In</b-link>
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

<style lang="scss" scoped>
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

.nav-link * {
  color: #20c997;
}
.nav--link {
  color: #20c997;
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
