import Vue from "vue";
import Vuex from "vuex";
import ApiHandler from "@/util/ApiHandler.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dogRegistration: {
			name: "",
			gender: "",
			age: "",
			size: "",
			breed: ""
		}
	},
	mutations: {
		saveDogForm(state, payload) {
			state.dogRegistration = payload.registerdogform;
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
		}
	},
	modules: {}
});
