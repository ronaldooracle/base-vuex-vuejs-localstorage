<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex>
            <v-card height="300" width="400" class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="authentication.user"
                    name="user"
                    label="user"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="authentication.password"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="Loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      authentication: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("login", {
      login: "login",
    }),
    async Loading() {
      await this.login(this.authentication);
      this.$router.push({ name: "main.home" });
    },
  },
};
</script>
