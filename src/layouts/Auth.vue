<template>
  <div class="background">
    <div class="opac">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            class="d-flex justify-center flex-column align-center"
          >
            <transition name="fade" mode="out-in">
              <router-view />
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pageName() {
      return this.$route.matched[this.$route.matched.length - 1].props.default
        .title;
    },
  },
};
</script>

<style scoped>
.background {
  background-size: cover;
  width: 100%;
  height: 100%;
}
.opac {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
}
</style>
