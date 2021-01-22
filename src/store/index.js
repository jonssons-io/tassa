import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loggedIn: false,
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
			state.userRegistration = payload.registeruserform;
		},
		saveDogForm(state, payload) {
			state.dogRegistration = payload.registerdogform;
		}
	},
	actions: {},
	modules: {}
});
