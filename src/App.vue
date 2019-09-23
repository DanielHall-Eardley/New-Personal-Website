<template>
  <div id="app">
    <app-banner></app-banner>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-interests></app-interests>
    <app-footer></app-footer>
  </div>
</template>

<script type="text/javascript">
  import Banner from "@/views/Banner"
  import Interests from "@/views/Interests"
  import Footer from "@/views/Footer"
  import Projects from "@/views/Projects"
  import Skills from "@/views/Skills"

  export default {
    components:{
      appBanner: Banner,
      appInterests: Interests,
      appFooter: Footer,
      appProjects: Projects,
      appSkills: Skills,
    },
    created(){
      this.$store.dispatch("autoLogin")
      this.$store.dispatch("getData")
    }
  }
</script>

<style lang="scss">
  @import "@/sass/mixins.scss";

  #app{
    position: relative;
  }

  html {
    font-size: 62.25%;

    @include mediaQ (tablet) {
      font-size: 55%;
    }

    @include mediaQ (phone) {
      font-size: 48%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    border: none;
    border-radius: $b-rad-sml;
    text-indent: $spacing-sml;
    font-size: 1.8rem;

    @include mediaQ (phone) {
      height: 4.1rem;
    }
  }
</style>
