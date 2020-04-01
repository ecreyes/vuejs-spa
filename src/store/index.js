import Vue from 'vue'
import Vuex from 'vuex'
//modules
import auth from "./modules/auth";

//plugins
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  },
  plugins: [createPersistedState()]
})
