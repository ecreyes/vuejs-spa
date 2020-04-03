<template>
  <v-container>
    <dataTable :users="users"/>    
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ADMIN_USERS_REQUEST } from "../../store/actions-types";
import DataTable from "@/components/DataTable";

export default {
  name: "Users",
  components:{
    DataTable
  },
  async mounted(){
    await this.ADMIN_USERS_REQUEST(this.token);
  },
  computed: {
    ...mapState("auth", ["isLogged", "token"]),
    ...mapState("admin", ["users"])
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