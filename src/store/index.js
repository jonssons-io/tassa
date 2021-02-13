import Vue from "vue";
import Vuex from "vuex";
import ApiHandler from "@/util/ApiHandler.js";
import CookieHandler from "../util/CookieHandler";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dogRegistration: {
			name: "",
			gender: "",
			age: "",
			size: "",
			breed: ""
		},
		navbarState: CookieHandler.getCookie("authstatus") === "true"
	},
	mutations: {
		saveDogForm(state, payload) {
			state.dogRegistration = payload.registerdogform;
		},
		updateNavbar(state, value) {
			state.navbarState = value;
		}
	},
	actions: {
		GET_USER({ commit }, userid) {
			return new Promise((resolve, reject) => {
				return ApiHandler.getUser(userid)
					.then(res => {
						commit("updateUserInfo", res);
						resolve(res);
					})
					.catch(error => {
						reject(error);
					});
			});
		},
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
