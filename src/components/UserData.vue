<template>
  <div>
    <v-menu bottom left offset-y>
      <template #activator="{ on }">
        <div class="menu-user" v-on="on">
          <v-avatar>
            <v-img aspect-ratio="1" :src="userPhoto" />
          </v-avatar>
          <span class="ml-3">
            <span v-show="$vuetify.breakpoint.smAndUp" class="mr-3">
              {{ user || "Usuário Desconhecido" }}
            </span>
            <v-icon>mdi-chevron-down</v-icon>
          </span>
        </div>
      </template>
      <v-list>
        <v-list-item link to="####">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="logoutView">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sair</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "@/store";
export default {
  data: () => ({
    user: "",
  }),
  computed: {
    userPhoto() {
      return require("@/assets/logo.png");
    },
  },
  async created() {
    this.user = store.getters["login/user"];
  },
  methods: {
    ...mapActions("login", ["logout"]),
    logoutView() {
      this.logout();
    },
  },
};
</script>
