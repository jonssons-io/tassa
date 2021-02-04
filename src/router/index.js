import Vue from "vue";
import VueRouter from "vue-router";
import CookieHandler from "../util/CookieHandler";
import StartPage from "../views/StartPage.vue";

Vue.use(VueRouter);

const loggedIn = () => {
	return CookieHandler.getCookie("authstatus");
};

const routes = [
	{
		path: "/",
		name: "StartPage",
		component: StartPage,
		meta: {
			title: "Tassa - Start"
		}
	},
	{
		path: "/om-oss",
		name: "AboutUs",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "aboutus" */ "../views/AboutUs.vue"),
		meta: {
			title: "Tassa - Om oss"
		}
	},
	{
		path: "/matchning",
		name: "Match",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "match" */ "../views/Match.vue"),
		meta: {
			title: "Tassa - Dina träffar",
			requiresAuth: true
		}
	},
	{
		path: "/editera-preferenser/:id",
		name: "EditPreferences",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "editpreferences" */ "../views/EditPreferences.vue"
			),
		meta: {
			title: "Tassa - Editera preferenser",
			requiresAuth: true
		}
	},
	{
		path: "/editera-familjen/:id",
		name: "EditFamily",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "editfamily" */ "../views/EditFamily.vue"
			),
		meta: {
			title: "Tassa - Editera familj",
			requiresAuth: true
		}
	},
	{
		path: "/editera-personligt/:id",
		name: "EditPersonal",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "editpersonal" */ "../views/EditPersonal.vue"
			),
		meta: {
			title: "Tassa - Editera personlig information",
			requiresAuth: true
		}
	},
	{
		path: "/logga-in",
		name: "LogIn",
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/LogIn.vue"),
		meta: {
			title: "Tassa - Logga in"
		}
	},
	{
		path: "/registrera",
		name: "RegisterUser",
		component: () =>
			import(
				/* webpackChunkName: "registeruser" */ "../views/RegisterUser.vue"
			),
		meta: {
			title: "Tassa - Registrera dig"
		}
	},
	{
		path: "/registrera-hund",
		name: "RegisterDog",
		component: () =>
			import(
				/* webpackChunkName: "registerdog" */ "../views/RegisterDog.vue"
			),
		meta: {
			title: "Tassa - Registrera din hund",
			requiresAuth: true
		}
	},
	{
		path: "/profil/:id",
		name: "ProfilePage",
		component: () =>
			import(
				/* webpackChunkName: "profilepage" */ "../views/ProfilePage.vue"
			),
		meta: {
			title: "Tassa - Profil",
			requiresAuth: true
		}
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});
router.beforeEach((to, from, next) => {
	document.title = to.meta.title || "Tassa";
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (loggedIn() == "true") {
			next();
		} else {
			console.log("logged in", loggedIn());
			next({
				path: "/logga-in"
			});
		}
	} else {
		next();
	}
});

export default router;
