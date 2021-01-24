import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentUser: {
			authstatus: false,
			id: "1",
			firstname: "Anna",
			lastname: "Andersson",
			email: "",
			phone: "",
			gender: "",
			area: "Huddinge",
			desc:
				"Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
			profilepicture: require("@/assets/DefaultPicture.svg"),
			dogs: [
				{
					name: "maja",
					gender: "tik",
					age: "8",
					size: "small",
					breed: "Jack Russel",
					dogpicture: require("@/assets/DefaultDog.svg")
				},
				{
					name: "nisse",
					gender: "hane",
					age: "3",
					size: "medium",
					breed: "Drever",
					dogpicture: require("@/assets/DefaultDog.svg")
				}
			]
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
			state.userRegistration = payload.registeruserform;
		},
		saveDogForm(state, payload) {
			state.dogRegistration = payload.registerdogform;
		}
	},
	actions: {},
	modules: {}
});
