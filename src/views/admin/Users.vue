<template>
  <v-container>
    <h1 class="display-1">Users page</h1>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ADMIN_USERS_REQUEST } from "../../store/actions-types";

export default {
  name: "Users",
  mounted(){
    this.ADMIN_USERS_REQUEST(this.token).then(()=>{
      console.log("exito users")
    }).catch(()=>{
      console.log("fallo users xd");
    });
  },
  computed: {
    ...mapState("auth", ["isLogged", "token"])
  },
  watch: {
    isLogged() {
      this.$router.replace("/");
    }
  },
  methods: {
    ...mapActions("admin", [ADMIN_USERS_REQUEST])
  }
};
</script>