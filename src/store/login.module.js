import router from "@/router";

const state = {
  user: JSON.parse(window.localStorage.getItem("user_logado")),
  password: JSON.parse(window.localStorage.getItem("user_senha")),
};
const mutations = {
  login(state, payload) {
    window.localStorage.setItem("user_logado", JSON.stringify(payload.user));
    state.user = payload.user;
    window.localStorage.setItem("user_senha", JSON.stringify(payload.password));
    state.password = payload.password;
  },
  logout(state) {
    window.localStorage.removeItem("user_logado");
    window.localStorage.removeItem("user_senha");
    state.password = undefined;
    state.user = undefined;
  },
};
const actions = {
  async login({ commit }, payload) {
    commit("login", payload);
  },
  async logout({ commit }) {
    commit("logout");
    router.push({ name: "auth.login" });
  },
};
const getters = {
  user(state) {
    return state.user;
  },
  password(state) {
    return state.password;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
