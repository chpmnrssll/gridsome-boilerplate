<template>
  <AgencyLayout>
    <h1 class="mb-4">About</h1>
    <img class="about-image" src="../../../uploads/profile.svg" alt="about-image" />
  </AgencyLayout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Agency Layout',
  },
};
</script>

<style lang="scss" scoped>
.about-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
