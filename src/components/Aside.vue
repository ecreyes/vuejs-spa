<template>
  <v-card class="mx-auto">
    <v-card-text>
      <div class="overline mb-4">Navegación personal</div>
      <v-list dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Aside",
  data: () => ({
    item: 0,
    items: [
      { text: "Mis cursos", icon: "mdi-clock", route: "/dashboard/courses" },
      { text: "Mi perfil", icon: "mdi-account", route: "/dashboard/profile" }
    ]
  })
};
</script>