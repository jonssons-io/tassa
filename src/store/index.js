import Vue from "vue";
import Vuex from "vuex";
import ApiHandler from "@/util/ApiHandler.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentUser: {
			authstatus: false,
			authtoken: "",
			id: ""
		},
		userRegistration: {
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			gender: "",
			area: "",
			password: "",
			repeatPassword: ""
		},
		dogRegistration: {
			name: "",
			gender: "",
			age: "",
			size: "",
			breed: ""
		}
	},
	mutations: {
		saveUserForm(state, payload) {
			state.userRegistration = payload;
		},
		saveDogForm(state, payload) {
			state.dogRegistration = payload.registerdogform;
		},
		userLoggedIn(state, payload) {
			console.log(payload);
			state.currentUser.authstatus = true;
			state.currentUser.authtoken = payload.data.result.token.token;
			state.currentUser.id = payload.data.result.user._id;
		}
	},
	actions: {
		USER_AUTH({ commit }, loginform) {
			return new Promise((resolve, reject) => {
				ApiHandler.userAuth(loginform)
					.then(res => {
						commit("userLoggedIn", res);
						resolve(res);
					})
					.catch(error => {
						console.log("in error");
						reject(error);
					});
			});
		},
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
