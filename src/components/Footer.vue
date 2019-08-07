<template>
  <footer class="page-footer font-small teal py-4">
    <div class="footer-copyright text-center">
      <g-link to="/admin" target="_blank" v-if="footerData.netlifyCMSLink" class="netlifyCMSLink">
        Netlify CMS
      </g-link>
    </div>
  </footer>
</template>

<static-query>
query footerData {
  footerData: allfooterData {
    edges {
      node {
        text
        netlifyCMSLink
      }
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    footerData() {
      return this.$static.footerData.edges[0].node;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  margin-top: 6rem;
  background-color: #f5f5f5;

  .netlifyCMSLink {
    color: #20c997;
  }
}
</style>
