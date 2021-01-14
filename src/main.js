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

import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";

import {
	faFacebookSquare,
	faFacebookF,
	faTwitter,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faAt, faLock);
library.add(faFacebookSquare, faFacebookF, faTwitter, faInstagram);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
