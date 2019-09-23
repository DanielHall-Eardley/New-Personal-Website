<template lang="html">
  <div class="footer-links">
    <a href="https://mail.google.com">350chevy8@gmail.com</a>
    <button @click="showAdmin = true" v-if="!showAdmin">
      Admin
    </button>
    <input v-else type="password" v-model="password" v-on:keyup.enter="signIn">
    <button @click="scroll($event)" type="button">Banner</button>
    <button @click="scroll($event)" type="button">Skills</button>
    <button @click="scroll($event)" type="button">Projects</button>
    <button @click="scroll($event)" type="button">Interests</button>
  </div>
</template>

<script>
  import { navMixin } from "@/navMixin.js"

  export default {
    mixins: [navMixin],
    data(){
      return{
        showAdmin: false,
        password: ""
      }
    },
    methods: {
      signIn() {
        this.$store.dispatch("signIn", this.password)
        this.password = ""
        this.showAdmin = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/mixins.scss";

  .footer-links {
    display: flex;
    flex-direction: column;
    padding-right: $spacing;
    border-right: solid .5px $orange-dark;

    button, a {
      @include button ($yellow, $red-dark);
      font-size: 1.7rem;
    }
  }

  input {
    height: 4.1rem;
  }
</style>
