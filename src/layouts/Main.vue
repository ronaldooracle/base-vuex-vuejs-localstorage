<template>
  <div>
    <v-navigation-drawer
      v-if="
        $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'
      "
      v-model="drawer"
      color="primary"
      mini-variant
      expand-on-hover
      app
      dark
      clipped
    >
      <menu-items />
    </v-navigation-drawer>
    <v-navigation-drawer
      v-else
      v-model="drawer"
      color="primary"
      app
      dark
      clipped
    >
      <menu-items />
    </v-navigation-drawer>
    <v-app-bar app color="primary" elevation="3" clipped-left>
      <v-app-bar-nav-icon
        class="secondary--text d-sm-none"
        @click="drawer = !drawer"
      />
      <logo class="ml-3 secondary--text" />
      <v-spacer />
      <user-data class="secondary--text caption" />
    </v-app-bar>
    <v-main id="content">
      <v-container fluid>
        <v-scroll-y-transition mode="out-in">
          <router-view />
        </v-scroll-y-transition>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import MenuItems from "@/components/MenuItems";
import Logo from "@/components/Logo.vue";
import UserData from "@/components/UserData";

export default {
  components: {
    MenuItems,
    Logo,
    UserData,
  },
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
};
</script>

<style scoped></style>
