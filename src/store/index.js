import Vue from "vue";
import Vuex from "vuex";
import CookieHandler from "../util/CookieHandler";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		navbarState: CookieHandler.getCookie("authstatus") === "true"
	},
	mutations: {
		updateNavbar(state, value) {
			state.navbarState = value;
		}
	},
	actions: {
		SET_NAVBAR({ commit }) {
			return new Promise(resolve => {
				if (CookieHandler.getCookie("authstatus")) {
					commit("updateNavbar", true);
					resolve();
				} else {
					commit("updateNavbar", false);
					resolve();
				}
			});
		}
	},
	modules: {}
});
