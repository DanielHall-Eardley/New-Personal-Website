<template lang="html">
  <div :class="project.class">
    <img :class="{blur: showBlur}"
      :src="project.img"
      alt="Photo"
      v-on:mouseenter="showBlur = true"
      v-on:mouseleave="showBlur = false">
    <svg v-on:mouseenter="showBlur = true"
      @click="showInfo = true"
      :class="{show: showBlur}">
      <use xlink:href="@/assets/sprite.svg#icon-info"></use>
    </svg>
    <a :href="project.url"
      v-on:mouseenter="showBlur = true"
      :class="{show: showBlur}">
      {{project.name}}
    </a>
    <transition name="scale">
      <p @click="showInfo = false" v-show="showInfo">
        {{project.info}}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showInfo: false,
      showBlur: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";
  @import "@/sass/mixins.scss";

  .project-stock-trader {
    grid-column: 1 / 6;
    grid-row: 1 / 3;
  }

  .project-ecommerce {
    grid-column: 6 / 8;
  }

  .project-monster-slayer {
    grid-column: 8 / 11;
    grid-row: 1 / 3;
  }

  .project-trillo {
    grid-column: 6 / 8;
  }

  .project-nexter {
    grid-column: 1 / 7;
    grid-row: 3 / 6;
  }

  .project-natours {
    grid-column: 7 / 11;
    grid-row: 3 / 6;
  }

  .project-showhook {
    grid-column: 1 / 6;
    grid-row: 6 / 9;
  }

  .project-old-personal-website {
    grid-column: 6 / -1;
    grid-row: 6 / 9;
  }

  [class^="project"] {
    position: relative;

    @include mediaQ (tablet) {
      grid-column: 1 / 2;
      grid-row: auto;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    object-position: top;
  }

  a {
    &:visited, &:link{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      text-decoration: none;
      color: $yellow;
      font-family: $font-1;
      transition: all .4s;
      z-index: 1;
      opacity: 0;

      &:hover {
        color: $red-light;
      }

      &:active {
        color: $red-dark;
      }
    }
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: $yellow;
    position: absolute;
    bottom: $spacing-sml;
    right: $spacing-sml;
    transition: all .3s;
    opacity: 0;
    z-index: 1;

    &:hover {
      fill: $red-light;
    }

    &:active {
      fill: $red-dark;
    }
  }

  p {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: $grey-dark;
    font-size: 2.2rem;
    font-family: $font-1;
    color: $yellow;
    padding: $spacing-sml;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .blur {
    filter: blur(.2rem) brightness(50%);
  }

  .show {
    opacity: 1 !important;
  }

  .scale-enter-active {
    animation: pop-in .2s ease-in forwards;
  }

  .scale-leave-active {
    animation:  pop-out .2s ease-out forwards;
  }
</style>
