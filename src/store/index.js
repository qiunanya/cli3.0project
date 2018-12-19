import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import createLogger from "@/plugins/logger";

import user from "./user";
import nav from "./nav";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user,
    nav
  },
  strict: debug,
  plugins: [debug ? createLogger() : () => {}, createPersistedState()]
});
