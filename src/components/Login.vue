<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-list-item v-on="on">
          <v-list-item-title>Iniciar sesión</v-list-item-title>
        </v-list-item>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Iniciar sesión</span>
        </v-card-title>
        <v-form @submit="onSubmit">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field id="email" v-model="email" label="Email*" type="email" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
            <v-btn color="blue darken-1" text type="submit">Iniciar sesión</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import { LOGIN_REQUEST } from "../store/actions-types";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      dialog: false
    };
  },
  methods: {
    ...mapActions("auth", [LOGIN_REQUEST]),
    async onSubmit(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password
      };
      this.LOGIN_REQUEST(user).then(()=>{
        this.dialog = false;
      }).catch(()=>{
        this.dialog = false;
      })
    }
  }
};
</script>