import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./assets/css/mainstyles.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import {
	faAt,
	faLock,
	faChevronDown,
	faTimes,
	faIdCard,
	faMobileAlt,
	faCalendarAlt,
	faDog,
	faPaw
} from "@fortawesome/free-solid-svg-icons";

import {
	faFacebookSquare,
	faFacebookF,
	faTwitter,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
	faAt,
	faLock,
	faChevronDown,
	faTimes,
	faIdCard,
	faMobileAlt,
	faCalendarAlt,
	faDog,
	faPaw
);
library.add(faFacebookSquare, faFacebookF, faTwitter, faInstagram);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty("--vw", `${vw}px`);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
