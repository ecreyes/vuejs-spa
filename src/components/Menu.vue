<template>
  <v-toolbar color="purple">
    <v-spacer></v-spacer>
    <v-menu offset-y transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn icon color="white" v-on="on">
          <v-icon>account_circle</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list v-if="!isLogged">
          <v-list-item>
            <Login />
          </v-list-item>
          <v-list-item>
            <Registro />
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item>
            <v-list-item-title @click="SET_LOGOUT">Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SET_LOGOUT } from "../store/mutations-types";
import Login from "@/components/Login";
import Registro from "@/components/Registro";

export default {
  name: "Menu",
  components: {
    Login,
    Registro
  },
  computed: {
    ...mapState("auth", ["isLogged"])
  },
  methods: {
    ...mapMutations("auth", [SET_LOGOUT])
  }
};
</script>