<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Carousel />
      </v-col>
      <v-col cols="12" xs="12" md="6" lg="4">
        <h1 class="display-1">Welcome</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus rerum rem, dolorum odit assumenda nobis sapiente culpa
          similique mollitia nulla voluptatum voluptates cupiditate vitae
          aspernatur velit minus quibusdam numquam totam!
        </p>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <h1 class="display-1">Welcome</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus rerum rem, dolorum odit assumenda nobis sapiente culpa
          similique mollitia nulla voluptatum voluptates cupiditate vitae
          aspernatur velit minus quibusdam numquam totam!
        </p>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <h1 class="display-1">Welcome</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Possimus rerum rem, dolorum odit assumenda nobis sapiente culpa
          similique mollitia nulla voluptatum voluptates cupiditate vitae
          aspernatur velit minus quibusdam numquam totam!
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Home",
  components: {
    Carousel
  }
};
</script>
