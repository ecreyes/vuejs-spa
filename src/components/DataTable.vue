<template>
  <v-data-table :headers="headers" :items="users" :items-per-page="5" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Panel de usuarios</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Añadir usuario</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Añadir usuario</span>
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
                <v-btn color="blue darken-1" text @click="defaultState()">Cerrar</v-btn>
                <v-btn color="blue darken-1" text type="submit">Añadir</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogUpdate" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Actualizar usuario</span>
            </v-card-title>
            <v-form @submit="onSubmitUpdate">
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="username" label="Nombre de usuario*" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="email" label="Correo*" required></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="defaultState()">Cerrar</v-btn>
                <v-btn color="blue darken-1" text type="submit">Actualizar</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.state="{ item }">
      <v-chip :color="item.state? 'success':'red'" dark>{{ item.state? "Activo":"Deshabilitado" }}</v-chip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="actualizarUsuario(item)">mdi-pencil</v-icon>
      <v-icon small class="mr-2" @click="eliminarUsuario(item._id)">mdi-delete</v-icon>
      <v-icon small @click="habilitarUsuario(item._id)">mdi-check-circle</v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapState } from "vuex";
import {
  ADMIN_DELETE_USER_REQUEST,
  ADMIN_ENABLE_USER_REQUEST,
  ADMIN_ADD_USER_REQUEST,
  ADMIN_USER_UPDATE_REQUEST
} from "../store/actions-types";
export default {
  name: "DataTable",
  props: ["users"],
  data() {
    return {
      id:0,
      username: "",
      email: "",
      password: "",
      repeatpassword: "",
      dialog: false,
      dialogUpdate: false,
      headers: [
        {
          text: "Nombre de usuario",
          align: "start",
          value: "username"
        },
        { text: "Correo", value: "email" },
        { text: "Estado", value: "state" },
        { text: "Acciones", value: "actions", sortable: false }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["token"])
  },
  methods: {
    ...mapActions("admin", [
      ADMIN_DELETE_USER_REQUEST,
      ADMIN_ENABLE_USER_REQUEST,
      ADMIN_ADD_USER_REQUEST,
      ADMIN_USER_UPDATE_REQUEST
    ]),
    actualizarUsuario(user) {
      this.id = user._id;
      this.username = user.username;
      this.email = user.email;
      this.dialogUpdate = true;
    },
    async eliminarUsuario(id) {
      await this.ADMIN_DELETE_USER_REQUEST({ id, token: this.token });
    },
    async habilitarUsuario(id) {
      await this.ADMIN_ENABLE_USER_REQUEST({ id, token: this.token });
    },
    async onSubmit(e) {
      e.preventDefault();
      let user = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      await this.ADMIN_ADD_USER_REQUEST({ user, token: this.token });
      this.defaultState();
    },
    async onSubmitUpdate(e){
      e.preventDefault();
      let user = {
        id: this.id,
        username:this.username,
        email:this.email
      }
      await this.ADMIN_USER_UPDATE_REQUEST({user,token:this.token});
      this.defaultState();
    },
    defaultState() {
      this.dialog = false;
      this.dialogUpdate = false;
      this.id = 0;
      this.username = "";
      this.email = "";
      this.password = "";
      this.repeatpassword = "";
    }
  }
};
</script>