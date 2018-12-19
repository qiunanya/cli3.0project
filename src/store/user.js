import { SETUSER, SETPERMISSION } from "./mutation-types";
import api from "@/server";

const state = {
  userInfo: {},
  permission: []
};

const getters = {};

const actions = {
  async login({ dispatch, commit }, user) {
    const userInfo = await api.login({ ...user });
    commit({
      type: "SETUSER",
      userInfo
    });
    dispatch("reqPermission");
  },
  async reqPermission({ dispatch, commit, state }) {
    const permission = await api.reqPermission(state.userInfo.staffid);
    commit({
      type: "SETPERMISSION",
      permission
    });
    dispatch("nav/toggleTopNav", permission[0].name, { root: true });
  }
};

const mutations = {
  [SETUSER](state, payload) {
    state.userInfo = payload.userInfo;
  },
  [SETPERMISSION](state, payload) {
    state.permission = payload.permission;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
