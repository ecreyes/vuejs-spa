<template>
  <v-container fluid background-color="#F2F2F2">
    <h1 class="headline">Mi Aula</h1>
    <v-row>
      <v-col cols="12" xs="12" md="3">
        <Aside />
      </v-col>
      <router-view></router-view>
      <v-col cols="12" xs="12" md="3">
        <v-card class="mx-auto">
          <v-card-text>
            <div class="overline mb-4">Anuncios</div>
            <div class="small">
              <line-chart :chart-data="datacollection"></line-chart>
              <button @click="fillData()">Randomize</button>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Aside from "@/components/Aside";
import LineChart from "../components/Linechart";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    Aside,
    LineChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {
    ...mapState("auth", ["isLogged"])
  },
  watch: {
    isLogged() {
      this.$router.replace("/");
    }
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
