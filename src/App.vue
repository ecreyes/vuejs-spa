<template>
  <v-app style="background:#F5F5F5">
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
