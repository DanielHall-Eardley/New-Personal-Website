<template lang="html">
  <section id="skills">
    <app-subheading title="Skills" contentType="text"></app-subheading>
    <app-list></app-list>
  </section>
</template>

<script>
  import SubHeading from "@/components/shared/SubHeading.vue"
  import List from "@/components/skills/List.vue"

  export default {
    components: {
      appSubheading: SubHeading,
      appList: List
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";

  #skills{
    background-color: $vanilla;

    &:target {
      transition: all .5s;
    }
  }
</style>
