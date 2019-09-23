export const navMixin = {
  methods: {
    scroll(e){
      let el = document.querySelector("#" + e.srcElement.innerText.toLowerCase())
      el.scrollIntoView({behavior: "smooth"})

      this.$store.commit("toggleMenu", false)
    }
  }
}
