<template>
  <v-data-table :headers="headers" :items="users" :items-per-page="5" class="elevation-1">
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
import { mapActions,mapState } from "vuex";
import { ADMIN_DELETE_USER_REQUEST,ADMIN_ENABLE_USER_REQUEST } from "../store/actions-types";
export default {
  name: "DataTable",
  props: ["users"],
  data() {
    return {
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
  computed:{
    ...mapState("auth",["token"])
  },
  methods: {
    ...mapActions("admin",[ADMIN_DELETE_USER_REQUEST,ADMIN_ENABLE_USER_REQUEST]),
    actualizarUsuario(user) {
      console.log(user);
    },
    async eliminarUsuario(id) {
      await this.ADMIN_DELETE_USER_REQUEST({id,token:this.token});
    },
    async habilitarUsuario(id){
      await this.ADMIN_ENABLE_USER_REQUEST({id,token:this.token});
    }
  }
};
</script>