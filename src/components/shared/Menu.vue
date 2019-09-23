<template lang="html">
  <span class="menu">
    <svg @click="toggleMenu(!showMenu)">
      <use xlink:href="@/assets/sprite.svg#icon-menu"></use>
    </svg>

    <transition name="menu">
      <nav v-show="showMenu">
        <button @click="scroll($event)" type="button">
          Banner
        </button>
        <button @click="scroll($event)" type="button">
          Skills
        </button>
        <button @click="scroll($event)" type="button">
          Projects
        </button>
        <button @click="scroll($event)" type="button">
          Interests
        </button>
      </nav>
    </transition>
  </span>
</template>

<script>
  import { navMixin } from "@/navMixin.js"

  export default {
    mixins: [navMixin],
    methods: {
      toggleMenu(bool){
        this.$store.commit("toggleMenu", bool)
      },
    },
    computed: {
      showMenu(){
        return this.$store.getters.showMenu
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";
  @import "@/sass/mixins.scss";

  .menu {
    margin: $spacing;
    display: flex;
    flex-direction: column;
    z-index: 1;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    align-self: start;

    @include mediaQ (tablet) {
      flex-direction: row;
      width: 100%;
    }

    nav {
      display: grid;
      grid-template-columns: min-content;
      grid-row-gap: $spacing;
      margin-top: .7rem;

      @include mediaQ (tablet) {
        grid-auto-flow: column;
      }
    }

    svg {
      width: 6rem;
      height: 6rem;
      fill: $orange-dark;
      transition: all .5s;
      border-radius: $b-rad-sml;
      align-self: start;
      margin-bottom: $spacing;
      padding: .7rem;

      @include mediaQ (tablet) {
        margin-bottom: 0;
      }

      &:hover {
        background-color: $red-light;
      }

      &:active {
        background-color: $orange-dark;
        fill: $red-light;
      }
    }

    button {
      @include button ($orange-dark, $red-light);

      @include mediaQ (tablet) {
        font-size: 2rem;
      }
    }
  }
</style>
