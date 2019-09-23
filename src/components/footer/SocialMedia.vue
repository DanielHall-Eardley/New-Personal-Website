<template lang="html">
  <div class="footer-icons">
    <a href="https://github.com/DanielHall-Eardley?tab=repositories">
      <svg>
        <use xlink:href="@/assets/sprite.svg#icon-github"></use>
      </svg>
    </a>

    <a href="https://www.facebook.com/daniel.hall.9081323">
      <svg>
        <use xlink:href="@/assets/sprite.svg#icon-facebook2"></use>
      </svg>
    </a>

    <a href="https://www.linkedin.com/in/daniel-hall-eardley-b38a44162/">
      <svg>
        <use xlink:href="@/assets/sprite.svg#icon-linkedin"></use>
      </svg>
    </a>
    <p>&copy; Daniel Hall-Eardley 2019</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import "@/sass/mixins.scss";
  @import "@/sass/variables.scss";

  .footer-icons {
    display: grid;
    grid-template-columns: repeat(3, min-content);
    justify-content: end;
    grid-column-gap: $spacing;
    padding-left: $spacing;

    svg {
      height: 8rem;
      width: 8rem;
      fill: $yellow;

      @include mediaQ (phone) {
        height: 5rem;
        width: 5rem;
      }
    }

    p {
      font-size: 1.8rem;
      color: $yellow;
      grid-column: 1 / -1;
      align-self: end;
      justify-self: end;
    }
  }
</style>
