import Vue from "vue";
import Vuex from "vuex";
import CookieHandler from "../util/CookieHandler";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		navbarState: CookieHandler.getCookie("authstatus") === "true",
		userDesc:
			"Här var det tomt.. Klicka här för att skriva en presentation!"
	},
	mutations: {
		updateNavbar(state, payload) {
			state.navbarState = payload;
		},
		updateDesc(state, payload) {
			state.userDesc = payload;
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
		},
		SET_DESC({ commit }, newDesc) {
			return new Promise(resolve => {
				if (newDesc) {
					commit("updateDesc", newDesc);
					resolve();
				} else {
					resolve();
				}
			});
		}
	},
	modules: {}
});
