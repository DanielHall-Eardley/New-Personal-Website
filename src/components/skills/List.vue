<template lang="html">
  <section class="skills-list">
    <app-list-item :key="skill.name" v-for="skill in skillArray" :skill="skill">
    </app-list-item>
  </section>
</template>

<script>
  import ListItem from "./ListItem.vue"

  export default {
    components: {
      appListItem: ListItem
    },
    computed: {
      skillArray(){
        return this.$store.getters.skillArray
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";

 .skills-list{
   padding: $spacing;
 }
</style>
