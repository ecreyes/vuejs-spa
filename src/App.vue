<template>
  <v-app>
    <v-content>
      <Menu />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "App",
  components: {
    Menu
  }
};
</script>
