<template>
  <div>
    <v-toolbar dark color="purple">
      <v-app-bar-nav-icon v-if="isLogged" @click="drawer=!drawer"></v-app-bar-nav-icon>
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
    <v-navigation-drawer
      v-if="isLogged"
      app
      v-model="drawer"
      dark
      color="purple"
      absolute
      temporary
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="@/assets/logo.svg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Vuetify</v-list-item-title>
            <v-list-item-subtitle>Panel de administración</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <div v-if="user.role=='ADMIN_ROLE'">
            <v-list-item v-for="item in adminItems" :key="item.key" :to="item.route">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SET_LOGOUT } from "../store/mutations-types";
import Login from "@/components/Login";
import Registro from "@/components/Registro";

export default {
  name: "Menu",
  data() {
    return {
      drawer: null,
      items: [
        {
          icon: "mdi-inbox",
          text: "Inicio",
          route: "/"
        },
        {
          icon: "mdi-star",
          text: "Mis cursos",
          route: "/courses"
        }
      ],
      adminItems: [
        {
          key: "key-users",
          icon: "mdi-star",
          text: "Usuarios",
          route: "/users"
        }
      ],
      model: 1
    };
  },
  components: {
    Login,
    Registro
  },
  computed: {
    ...mapState("auth", ["isLogged", "user"])
  },
  methods: {
    ...mapMutations([SET_LOGOUT])
  }
};
</script>