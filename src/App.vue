<template>
  <v-app>
    <loader :visible="loading" />
    <notifier type="error" :message="messageError" :show="error" />

    <notifier type="success" :message="messageSuccess" :show="success" />
    <router-view />
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState("loader", ["loading"]),
    ...mapState("notifier", [
      "error",
      "messageError",
      "success",
      "messageSuccess",
    ]),
  },
};
</script>
