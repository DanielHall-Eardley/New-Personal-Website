<template lang="html">
  <section id="projects">
    <app-subheading title="Projects" contentType="text"></app-subheading>
    <div class="projects-list">
      <app-project-item  :key="project.class"
        :project="project"
        v-for="project in projectArray">
      </app-project-item>
    </div>
  </section>
</template>

<script>
  import SubHeading from "@/components/shared/SubHeading.vue"
  import ProjectItem from "@/components/projects/ProjectItem.vue"

  export default {
    computed: {
      projectArray(){
        return this.$store.getters.projectArray
      }
    },
    components: {
      appSubheading: SubHeading,
      appProjectItem: ProjectItem
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";
  @import "@/sass/mixins.scss";

  #projects {
    background-color: $vanilla;

    .projects-list {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(8, 20vh);
      grid-gap: $spacing;
      padding: $spacing;

      @include mediaQ (tablet) {
        grid-template-columns: 100%;
        grid-template-rows: auto;
      }
    }
  }
</style>
