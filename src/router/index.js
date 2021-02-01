import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../views/StartPage.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "StartPage",
		component: StartPage
	},
	{
		path: "/om-oss",
		name: "AboutUs",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "aboutus" */ "../views/AboutUs.vue")
	},
	{
		path: "/matchning",
		name: "Match",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "match" */ "../views/Match.vue")
	},
	{
		path: "/editera-profil",
		name: "EditProfile",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "profile" */ "../views/EditProfile.vue")
	},
	{
		path: "/logga-in",
		name: "LogIn",
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/LogIn.vue")
	},
	{
		path: "/registrera",
		name: "RegisterUser",
		component: () =>
			import(
				/* webpackChunkName: "registeruser" */ "../views/RegisterUser.vue"
			)
	},
	{
		path: "/registrera-hund",
		name: "RegisterDog",
		component: () =>
			import(
				/* webpackChunkName: "registerdog" */ "../views/RegisterDog.vue"
			),
		props: true
	},
	{
		path: "/profil/:id",
		name: "ProfilePage",
		component: () =>
			import(
				/* webpackChunkName: "profilepage" */ "../views/ProfilePage.vue"
			)
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
