<template>
    <v-container>
        <h1 class="display-1">Users page</h1>
    </v-container>
</template>

<script>
import {mapState} from "vuex";
export default {
    name:'Users',
    computed:{
        ...mapState("auth",["isLogged"])
    },
    watch:{
        isLogged(){
            this.$router.replace("/");
        }
    }

}
</script>