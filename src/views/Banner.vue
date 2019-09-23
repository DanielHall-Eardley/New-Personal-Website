<template lang="html">
  <header id="banner">
    <app-menu></app-menu>
    <transition name="dropdown" appear>
      <h1>Daniel Hall Eardley</h1>
    </transition>
  </header>
</template>

<script>
  import Menu from "@/components/shared/Menu.vue"

  export default {
    data() {
      return{
        toggle: false
      }
    },
    components: {
      appMenu: Menu
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";
  @import "@/sass/mixins.scss";

  #banner {
    height: 100vh;
    display: grid;
    overflow: hidden;
    background-image:
      linear-gradient(to right, rgba($red-light, .7), rgba($red-dark, .7)),
      url("./../assets/large-hellcat.jpg");
    background-position: center;
    background-size: cover;

    h1 {
      grid-row: 1 / 2;
      grid-column:  1 / 2;
      align-self: center;
      justify-self: center;
      font-size: 6rem;
      font-family: $font-2;
      font-weight: 200;
      letter-spacing: .5rem;
      color: $orange-dark;
      text-align: center;

      @include mediaQ (tablet) {
        font-size: 5rem;
      }

      @include mediaQ (phone) {
        font-size: 4rem;
      }
    }
  }
</style>
