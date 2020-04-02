<template>
  <v-data-table :headers="headers" :items="users" :items-per-page="7" class="elevation-1">
    <template v-slot:item.state="{ item }">
      <v-chip :color="item.state? 'success':'red'" dark>{{ item.state? "Activo":"Deshabilitado" }}</v-chip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="actualizarUsuario(item)">mdi-pencil</v-icon>
      <v-icon small @click="eliminarUsuario(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
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
  methods:{
      actualizarUsuario(user){
          console.log(user);
      },
      eliminarUsuario(user){
          console.log(user);
      }
  }
};
</script>