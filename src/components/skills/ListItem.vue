<template lang="html">
  <div class="list-item">
    <div class="inner" :style="{width: skill.content}">
      {{skill.name}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["skill"]
}
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";

  .list-item {
    background-color: $grey-light;
    height: 4rem;
    font-size: 2.5rem;
    font-family: $font-1;
    border-radius: $b-rad-sml;
    position: relative;

    &:not(:last-child){
      margin-bottom: $spacing;
    }

    .inner {
      display: flex;
      align-items: center;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: $yellow;
      color: $grey-dark;
      border-top-left-radius: $b-rad-sml;
      border-bottom-left-radius: $b-rad-sml;
      text-indent: $spacing-sml;
      font-weight: bold;
    }
  }
</style>
