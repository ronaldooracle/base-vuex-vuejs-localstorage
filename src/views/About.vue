<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {
    ...mapActions("login", {
      login: "login",
    }),
    async Loading() {
      await this.login();
      this.$router.push({ name: "main.home" });
    },
  },
};
</script>
