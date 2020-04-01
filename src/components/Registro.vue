<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-list-item v-on="on">
          <v-list-item-title>Registrarse</v-list-item-title>
        </v-list-item>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Registro de usuario</span>
        </v-card-title>
        <v-form @submit="onSubmit">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="username" label="Nombre de usuario*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Correo*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="password" label="Contraseña*" type="password" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="repeatpassword"
                    label="Repetir contraseña*"
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
            <v-btn color="blue darken-1" text type="submit">Registrarse</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import { REGISTER_REQUEST } from "../store/actions-types";

export default {
  name: "Registro",
  data: () => ({
    username: "",
    email: "",
    password: "",
    repeatpassword: "",
    dialog: false
  }),
  methods: {
    ...mapActions("auth", [REGISTER_REQUEST]),
    onSubmit(e) {
      e.preventDefault();
      let user = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.REGISTER_REQUEST(user).then(()=>{
        console.log("registro e inicio de sesión exitoso");
        this.dialog = false;
      }).catch(()=>{
        console.log("registro e inicio de sesión fallido");
        this.dialog = false;
      });
      console.log(user);
    }
  }
};
</script>