<template>
  <footer class="page-footer font-small teal py-4">
    <div class="footer-copyright text-center">
      <a rel="noopener" href="/admin">Netlify Login</a>
    </div>
    <div v-if="isLoggedIn">
      <p>Hello {{ username }}</p>
      <p>
        <button @click="triggerNetlifyIdentityAction('logout')">Log Out</button>
      </p>
    </div>
    <div v-else>
      <p>You are not logged in.</p>
      <p>
        <button @click="triggerNetlifyIdentityAction('login')">Log In</button>
        <button @click="triggerNetlifyIdentityAction('signup')">Sign Up</button>
      </p>
    </div>
    <ul>
      <li>
        <g-link to="/protected">Protected Page</g-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import netlifyIdentity from 'netlify-identity-widget';
import { mapGetters, mapActions } from 'vuex';

// import Home from '~/components/Home';
// import Public from '~/components/Public';
// import Protected from '~/components/Protected';

netlifyIdentity.init();

export default {
  name: 'App',
  // components: {
  //   Home,
  //   Public,
  //   Protected,
  // },
  data: () => ({
    currentUser: null,
  }),
  computed: {
    ...mapGetters('user', {
      isLoggedIn: 'getUserStatus',
      user: 'getUser',
    }),
    username() {
      return this.user ? this.user.username : ', there!';
    },
  },
  methods: {
    ...mapActions('user', {
      updateUser: 'updateUser',
    }),
    triggerNetlifyIdentityAction(action) {
      if (action === 'login' || action === 'signup') {
        netlifyIdentity.open(action);
        netlifyIdentity.on(action, user => {
          this.currentUser = {
            username: user.user_metadata.full_name,
            email: user.email,
            access_token: user.token.access_token,
            expires_at: user.token.expires_at,
            refresh_token: user.token.refresh_token,
            token_type: user.token.token_type,
          };
          this.updateUser({ currentUser: this.currentUser });
          netlifyIdentity.close();
        });
      } else if (action === 'logout') {
        this.currentUser = null;
        this.updateUser({ currentUser: this.currentUser });
        netlifyIdentity.logout();
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss">
footer {
  width: 100%;
  margin-top: 6rem;
  background-color: #f5f5f5;
}
</style>
