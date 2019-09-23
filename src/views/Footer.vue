<template lang="html">
  <footer>
    <app-links></app-links>
    <app-social-media></app-social-media>
  </footer>
</template>

<script>
  import SocialMedia from "@/components/footer/SocialMedia.vue"
  import Links from "@/components/footer/Links.vue"

  export default {
    components: {
      appLinks: Links,
      appSocialMedia: SocialMedia
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/mixins.scss";

  footer {
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: $grey-dark;
    padding: $spacing;

    @include mediaQ (phone) {
      grid-template-columns: min-content 1fr;
    }
  }
</style>
