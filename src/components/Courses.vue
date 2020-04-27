<template>
  <v-col cols="12" xs="12" md="6">
    <v-card class="mx-auto">
      <v-card-text>
        <div class="overline mb-4">Mis asignaturas</div>
        <v-row>
          <v-col v-for="n in 12" :key="n" cols="12" xs="12" sm="4" md="4">
            <CardCourse
              title="Matemáticas I"
              description="Asignatura con contenidos de derivadas y ecuaciones de primer grado"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import CardCourse from "@/components/CardCourse";
export default {
  name: "Courses",
  components: {
    CardCourse
  }
};
</script>
