const notifier = {
  namespaced: true,
  state: {
    error: false,
    success: false,
    messageError: "",
    messageSuccess: "",
  },
  actions: {
    showError({ commit }, message) {
      commit("toggleError", message);
    },
    showSuccess({ commit }, message) {
      commit("toggleSuccess", message);
    },
    reset({ commit }) {
      commit("resetNotification");
    },
  },
  mutations: {
    toggleError(state, message) {
      state.error = true;
      state.messageError = message;
    },
    toggleSuccess(state, message) {
      state.success = true;
      state.messageSuccess = message;
    },
    resetNotification(state) {
      state.error = false;
      state.success = false;
    },
  },
};

export default notifier;
