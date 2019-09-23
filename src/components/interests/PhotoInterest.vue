<template lang="html">
  <div class="interest-item">
    <h3>{{interest.name}}</h3>
    <img :src="interest.content" alt="Photo">
  </div>
</template>

<script>
export default {
  props: ["interest"],
}
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";
  @import "@/sass/mixins.scss";

  .interest-item {

    h3 {
      text-align: center;
      font-size: 3rem;
      font-family: $font-1;
      margin-bottom: $spacing-sml;
      color: $grey-dark;
    }

    img {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
</style>
