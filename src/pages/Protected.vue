<template>
  <Layout>
    <h1 class="mb-4">Protected Content</h1>
    <img
      class="lock-image"
      src="../../static/assets/images/key-with-lock-square.svg"
      alt="lock-image"
    />

    <p>
      Lorem ipsum dolor sit amet consectetur adipiscing elit, platea elementum mus lectus molestie
      et. Conubia taciti nunc proin vehicula et nascetur lacinia commodo non, penatibus vel dui
      pharetra inceptos himenaeos orci viverra ad, quis ullamcorper sit scelerisque nibh praesent
      imperdiet vulputate.
    </p>

    <p>
      Eros morbi himenaeos eget sagittis parturient, netus sapien pharetra semper iaculis orci,
      elementum ullamcorper eleifend aenean. Orci ligula euismod taciti conubia facilisis mattis
      laoreet, cras aliquam ultrices purus augue morbi, a litora feugiat dapibus per lacinia.
    </p>

    <p>
      Conubia non mi vulputate natoque nullam sem nascetur fames felis, hendrerit imperdiet pretium
      urna a augue nec quis lorem, orci sed vehicula pulvinar viverra nam lacus porttitor. Praesent
      id elementum aliquet dolor himenaeos primis urna vestibulum, molestie sagittis cursus facilisi
      tellus phasellus lacinia, viverra porttitor tincidunt tortor habitasse class luctus.
    </p>
  </Layout>
</template>

<script>
export default {
  name: 'Protected',
  data: () => {
    return {
      foo: 'bar',
    };
  },
  meta: [{ requiresAuth: true }],
};
</script>
