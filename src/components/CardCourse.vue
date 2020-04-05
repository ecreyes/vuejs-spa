<template>
  <v-card color="#1F7087" dark>
    <v-card-title class="headline">{{title}}</v-card-title>

    <v-card-subtitle>{{description}}</v-card-subtitle>

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