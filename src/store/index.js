import Vue from 'vue'
import Vuex from 'vuex'

//mutations
import { SET_LOGOUT } from "./mutations-types";

//modules
import auth from "./modules/auth";
import admin from "./modules/admin";

//plugins
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    [SET_LOGOUT](state){
      state.auth.user = {};
      state.auth.token = "";
      state.auth.isLogged = false;
      state.auth.isFetching = false;
      state.auth.error = false;
      state.admin.users = [];
      state.admin.isFetching = false;
      state.admin.error = false;
    }
  },
  actions: {
  },
  modules: {
    auth,
    admin
  },
  plugins: [createPersistedState()]
})
