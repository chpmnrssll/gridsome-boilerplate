<template>
  <div>
    <h1>Bravo! You made it! Protected Page</h1>
  </div>
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
