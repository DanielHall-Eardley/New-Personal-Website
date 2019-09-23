import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: false,
    authToken: null,
    skills: [],
    projects: [
      {
        class: "project-stock-trader",
        img: require("@/assets/stock-trader.jpg"),
        info: `A project I built as part of a Vue.js course,
        I also added authentication with Firebase.`,
        name: "Stock Trader",
        url: "https://stock-trader-d2a27.firebaseapp.com"
      },
      {
        class: "project-ecommerce",
        img: require("@/assets/ecommerce.jpg"),
        info: "An old project that I started building to try emulate the idea of ecommerce store.",
        name: "Ecommerce Template",
        url: "https://ecommerce-7e41d.firebaseapp.com"
      },
      {
        class: "project-monster-slayer",
        img: require("@/assets/monster-slayer.jpg"),
        info: "A simple game I built as part of a Vue.js course.",
        name: "Monster Slayer",
        url: "https://monster-slayer-b6b11.firebaseapp.com",
      },
      {
        class: "project-trillo",
        img: require("@/assets/trillo.jpg"),
        info: "A mock hotel booking page I built as part of an advanced CSS and Sass course.",
        name: "Trillo",
        url: "https://trillo-aa76e.firebaseapp.com"
      },
      {
        class: "project-nexter",
        img: require("@/assets/nexter.jpg"),
        info: "A mock real estate website I built as part of an advanced CSS and Sass course. The layout was built using Grid.",
        name: "Nexter",
        url: "https://nexter-5880f.firebaseapp.com",
      },
      {
        class: "project-natours",
        img: require("@/assets/natours.jpg"),
        info: "A mock travel website I built as part of an advanced CSS and Sass course. The layout was built using Floats.",
        name: "Natours",
        url: "https://natours-46f84.firebaseapp.com",
      },
      {
        class: "project-showhook",
        img: require("@/assets/showhook.jpg"),
        info: "This is a website I am building for a client, who wants to create marketplace for connecting musicians, venues and showgoers. Unfortunately it is not ready for deployment, however in person I can show a locally hosted version.",
        name: "Showhook",
        url: "https://showhook-pictures.firebaseapp.com/"
      },
      {
        class: "project-old-personal-website",
        img: require("@/assets/old-personal-website.jpg"),
        info: "This is my old personal website, I decided to update it to the website you are currently viewing as it was made over a year ago.",
        name: "Old Personal Website",
        url: "http://danielhalleardley.com"
      },
    ],
    interests: [
      {
        content: require("@/assets/charger-hellcat.jpg"),
        name: "Muscle Cars"
      },
      {
        content: require("@/assets/avengers-small.jpg"),
        name: "Marvel"
      },
      {
        content: require("@/assets/coding.jpg"),
        name: "Coding"
      },
      {
        content: require("@/assets/gaming.jpg"),
        name: "Gaming"
      },
      {
        content: require("@/assets/music.jpg"),
        name: "Music"
      },
      {
        content: require("@/assets/rum.jpg"),
        name: "Rum"
      },
      {
        content: require("@/assets/tech.jpg"),
        name: "Technology"
      },
      {
        content: require("@/assets/john-wick.jpg"),
        name: "John Wick"
      },
    ]
  },
  mutations: {
    updateAuth: (state, payload) => {
      state.authToken = payload
    },
    clearAuth: state => {
      state.authToken = null
      localStorage.clear()
    },
    getData: (state, payload) => {
      state.skills = payload.skills
      //state.projects = payload.projects
      //state.interests = payload.interests
    },
    updateData: (state, payload) => {
      state[payload.name] = payload.data
    },
    toggleMenu: (state, payload) => {
      state.showMenu = payload
    }
  },
  actions: {
    signIn: ({commit, dispatch}, payload) => {
      let data = {
        password: payload,
        email: "350chevy8@gmail.com",
        returnSecureToken: true
      }

      axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVE5vW78KwUVcVuFE7LE_3w34kO6S-NNc", data)
      .then(res => {
        commit("updateAuth", res.data.idToken)
        let time = parseInt(res.data.expiresIn) * 1000
        let exp = new Date().getTime() + time
        let expDate = new Date(exp)
        localStorage.setItem("token", res.data.idToken)
        localStorage.setItem("expiration", expDate)

        dispatch("autoLogout", time)
      })
      .catch(err => {
        console.log(err)
      })
    },
    autoLogout: ({commit}, payload) => {
      setTimeout(() => {
        commit("clearAuth")
        console.log("logged out")
      }, payload)
    },
    autoLogin: ({commit, dispatch}) => {
      let expDate = new Date(localStorage.getItem("expiration"))
      let now = new Date()
      if(!expDate) return
      if(now > expDate) return

      let token = localStorage.getItem("token")
      commit("updateAuth", token)
      dispatch("autoLogout", expDate.getTime() - now.getTime())
    },
    updateSkillsAndInterests:(context, payload) => {
      let add = true

      let updatedArray = context.state[payload.arrayName].map(el => {
        if(el.name === payload.name) {
          el.content = payload.content
          add = false
        }else{
          return el
        }
      })

      if(add){
        updatedArray.push({name: payload.name, content: payload.content})
      }
      axios.put(`https://personal-website-455c9.firebaseio.com/data/${payload.arrayName}.json?auth=${context.state.authToken}`, updatedArray)
      .then(res => {
        context.commit("updateData", {

        })
      })
    },
    updateProjects: (context, payload) => {
      let add = true

      let updatedArray = context.state.projects.map(el => {
        return el
      })

      if(add){
        updatedArray.push({name: payload.name, content: payload.content})
      }

      axios.put(`https://personal-website-455c9.firebaseio.com/data/${payload.arrayName}.json?auth=${context.state.authToken}`, updatedArray)
      .then(res => {
        console.log(res)
      })
    },
    getData: ({commit, state}) => {
      axios.get(`https://personal-website-455c9.firebaseio.com/data.json`)
      .then(res => {
        console.log(res)
        commit("getData", res.data)
      })
    }
  },
  getters:{
    showMenu: state => {
      return state.showMenu
    },
    checkAuth: state => {
      if(state.authToken) {
        return true
      }
      return false
    },
    skillArray: state => {
      return state.skills
    },
    projectArray: state => {
      return state.projects
    },
    interestArray: state => {
      return state.interests
    }
  }
})
