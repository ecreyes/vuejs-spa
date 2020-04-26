<template>
  <v-container fluid background-color="#F2F2F2">
    <h1 class="headline">Mi Aula</h1>
    <v-row>
      <v-col cols="12" xs="12" md="2">
        <v-banner sticky elevation="1">
          <div class="overline mb-4">Navegación personal</div>
        </v-banner>
      </v-col>
      <v-col cols="12" xs="12" md="8">
        <v-card class="mx-auto">
          <v-card-text>
            <div class="overline mb-4">Mis asignaturas</div>
            <v-row>
              <v-col v-for="n in 20" :key="n" cols="12" xs="12" md="3">
                <CardCourse
                  title="Matemáticas I"
                  description="Asignatura con contenidos de derivadas y ecuaciones de primer grado"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="2">
        <v-banner sticky elevation="1">
          <div class="overline mb-4">Anuncios</div>
        </v-banner>
      </v-col>
    </v-row>
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
