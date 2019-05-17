<template>
  <div>
    <h1>Bravo! You made it! Protected Page</h1>
  </div>
</template>

<script>
const isClient = typeof window !== 'undefined';

export default {
  name: 'Protected',
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$store.state.user.user) {
        return next();
      }
      // alert('Please log in or sign up!');
      if (isClient) {
        vm.$bvModal.msgBoxOk('Please log in or sign up!', {
          title: 'Error',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true,
        });
      }
      return next('/');
    });
  },
};
</script>
