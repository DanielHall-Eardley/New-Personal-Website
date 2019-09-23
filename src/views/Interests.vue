<template lang="html">
  <section id="interests">
    <app-sub-heading title="Interests" contentType="text">
    </app-sub-heading>
    <div class="interests-list">
      <app-photo-interest :key="interest.name"
        :interest="interest"
        v-for="interest in interestArray">
      </app-photo-interest>
    </div>
  </section>
</template>

<script>
  import PhotoInterest from "@/components/interests/PhotoInterest.vue"
  import SubHeading from "@/components/shared/SubHeading.vue"

export default {
  components: {
    appPhotoInterest: PhotoInterest,
    appSubHeading: SubHeading
  },
  computed: {
    interestArray() {
      return this.$store.getters.interestArray
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";

  .interests-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, auto));
    grid-gap: 4rem;
    justify-items: center;
    justify-content: center;
    padding: $spacing;
    background-color: $vanilla;
  }
</style>
