import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentUser: {
			authstatus: false,
			authtoken: "",
			id: "",
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			gender: "",
			area: "",
			desc: "",
			profilepicture: require("@/assets/DefaultPicture.svg"),
			dogs: []
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
				axios
					.post(`/api/v1/auth/login`, loginform)
					.then(res => {
						commit("userLoggedIn", res);
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
