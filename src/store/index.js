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
		}
	},
	mutations: {
		saveUserForm(state, payload) {
			state.userRegistration = payload.registeruserform;
		}
	},
	actions: {},
	modules: {}
});
