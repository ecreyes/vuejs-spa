<template>
  <v-container>
    <h1 class="display-1">Mis cursos</h1>
    <v-container>
      <v-row>
        <v-col cols="12" xs="6" sm="6" md="6" lg="4">
          <CardCourse title="titulo" description="descripción" />
        </v-col>
        <v-col cols="12" xs="6" sm="6" md="6" lg="4">
          <CardCourse title="titulo" description="descripción" />
        </v-col>
        <v-col cols="12" xs="6" sm="6" md="6" lg="4">
          <CardCourse title="titulo" description="descripción" />
        </v-col>
        <v-col cols="12" xs="6" sm="6" md="6" lg="4">
          <CardCourse title="titulo" description="descripción" />
        </v-col>
        <v-col cols="12" xs="6" sm="6" md="6" lg="4">
          <CardCourse title="titulo" description="descripción" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CardCourse from "@/components/CardCourse";
import { mapState } from "vuex";
export default {
  name: "Courses",
  components: {
    CardCourse
  },
  computed: {
    ...mapState("auth", ["isLogged"])
  },
  watch: {
    isLogged() {
      this.$router.replace("/");
    }
  }
};
</script>
