<template lang="html">
  <header class="subheading">
    <h2>{{title}}</h2>
    <input type="text"
      v-model="itemTitle"
      placeholder="Title"
      v-if="toggleEdit"
      key="title">
    <input :type="contentType"
      v-model="itemContent"
      placeholder="Content"
      v-if="toggleEdit"
      key="content">
    <button v-if="toggleEdit" key="save" @click="updateData">Save</button>
    <svg @click="toggleEdit = !toggleEdit" v-if="checkAuth">
      <use xlink:href="@/assets/sprite.svg#icon-edit"></use>
    </svg>
  </header>
</template>

<script>
  export default {
    props: ["title", "contentType"],
    data(){
      return{
        itemTitle: null,
        itemContent: null,
        toggleEdit: false
      }
    },
    computed: {
      checkAuth() {
        return this.$store.getters.checkAuth
      }
    },
    methods: {
      updateData() {
        let data = {
          arrayName: this.title.toLowerCase(),
          name: this.itemTitle,
          content: this.itemContent
        }
        let action = ""
        if(data.arrayName === "skills" || data.arrayName === "interests") {
          action = "updateSkillsAndInterests"
        } else {
          action = "updateProjects"
        }
        this.$store.dispatch(action, data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/animations.scss";
  @import "@/sass/mixins.scss";

  .subheading {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    grid-column-gap: $spacing;
    background-color: $orange-dark;
    padding: $spacing-sml;
    font-family: $font-1;

    @include mediaQ (tablet) {
      grid-template-columns: 1fr repeat(3, min-content) 1fr;
    }

    @include mediaQ (phone) {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: $spacing-sml;
    }

    h2 {
      font-size: 3.2rem;
      color: white;
      text-transform: uppercase;

    }

    input:first-of-type {
      @include mediaQ (phone) {
        grid-row: 2 / 3;
        grid-column: 1 / -1;
        height: 4rem
      }
    }

    input:last-of-type {
      @include mediaQ (phone) {
        grid-row: 3 / 4;
        grid-column: 1 / -1;
        height: 4rem
      }
    }

    button {
      background-color: inherit;
      outline: none;
      color: white;
      border: solid .5px $red-dark;
      border-radius: $b-rad-sml;
      transition: all .3s;
      width: 6rem;

      @include mediaQ (phone) {
        grid-row: 4 / 5;
        grid-column: 1 / -1;
        justify-self: center;
        height: 4.1rem;
      }

      &:hover {
        background-color: $red-light;
      }

      &:active {
        background-color: inherit;
      }
    }

    svg{
      height: 4.5rem;
      width: 4.5rem;
      padding: .5rem;
      fill: white;
      transition: all .5s;
      border-radius: $b-rad-sml;

      @include mediaQ (tablet) {
        justify-self: end;
        grid-column: 5 / -1;
      }

      &:hover {
        background-color: $orange-light;
      }

      &:active {
        background-color: $red-light;
        fill: $orange-light;
      }
    }
  }
</style>
