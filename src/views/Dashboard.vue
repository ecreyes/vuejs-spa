<template>
  <v-container fluid background-color="#F2F2F2">
    <h1 class="headline">Mi Aula</h1>
    <v-row>
      <v-col cols="12" xs="12" md="3">
        <Aside/>
      </v-col>
      <router-view></router-view>
      <v-col cols="12" xs="12" md="3">
        <v-card class="mx-auto">
          <v-card-text>
            <div class="overline mb-4">Anuncios</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Aside from "@/components/Aside";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    Aside
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
