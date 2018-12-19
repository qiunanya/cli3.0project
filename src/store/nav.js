import { SETROUTE, SETTOPNAV, SETCOLLAPSE } from "./mutation-types";

const state = {
  routes: {},
  topNav: "",
  isCollapse: false
};

const getters = {
  navs(state, getters, rootState) {
    return rootState.user.permission;
  },
  topNavs(state, getters) {
    let navs = getters.navs;
    let topNavs = navs.map(el => {
      return { name: el.name, cname: el.cname };
    });
    return topNavs;
  },
  leftNavs(state, getters) {
    let navs = getters.navs;
    let left = navs.filter(el => el.name == state.topNav);
    return left[0] ? left[0].children : [];
  }
};

const actions = {
  toggleIsCollapse({ commit, state }) {
    commit("SETCOLLAPSE", {
      isCollapse: !state.isCollapse
    });
  },
  toggleTopNav({ commit }, name) {
    commit("SETTOPNAV", {
      topNav: name
    });
  }
};

const mutations = {
  [SETROUTE](state, payload) {
    state.routes = payload.routes;
  },
  [SETTOPNAV](state, payload) {
    state.topNav = payload.topNav;
  },
  [SETCOLLAPSE](state, payload) {
    state.isCollapse = payload.isCollapse;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
