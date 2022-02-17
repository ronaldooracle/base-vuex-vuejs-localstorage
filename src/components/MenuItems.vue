<template>
  <v-list dense>
    <v-list-item
      v-for="item in menu"
      :key="item.path"
      link
      class="py-1"
      :to="{ name: item.name }"
    >
      <v-list-item-icon>
        <v-icon>{{ item.props.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title class="text-uppercase font-weight-bold">
          {{ item.props.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import mainRoutes from "@/router/main";

export default {
  name: "MenuItems",
  components: {},
  computed: {
    menu() {
      return mainRoutes.children.filter((c) => !c.props.hide);
    },
  },
};
</script>
