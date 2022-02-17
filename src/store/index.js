import Vue from "vue";
import Vuex from "vuex";

import login from "./login.module";
import loader from "./loader.module";
import notifier from "./notifier.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    loader,
    notifier,
  },
});
