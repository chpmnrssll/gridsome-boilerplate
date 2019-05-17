<template>
  <div>
    <h1>Bravo! You made it! Protected Page</h1>
  </div>
</template>

<script>
// import swal from 'sweetalert2';
// import { BModal } from 'bootstrap-vue/es/components';

export default {
  name: 'Protected',
  // components: {
  //   'b-modal': BModal,
  // },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$store.state.user.user) {
        return next();
      }
      // alert('Please log in or sign up!');
      vm.$bvModal.msgBoxOk('Please log in or sign up!', {
        title: 'Error',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true,
      });
      // swal({
      //   title: 'Error!',
      //   text: 'Please log in or sign up!',
      //   type: 'error',
      //   allowOutsideClick: false,
      //   confirmButtonText: 'All Right',
      // });
      return next('/');
    });
  },
};
</script>
