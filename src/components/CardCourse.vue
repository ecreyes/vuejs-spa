<template>
  <v-card color="info" dark max-width="200">
    <v-card-title class="headline">{{title}}</v-card-title>

    <v-card-subtitle class="text-justify">{{description}}</v-card-subtitle>

    <v-card-actions>
      <v-btn text>Entrar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name:"CardCourse",
    props:["title","description"]
}
</script>