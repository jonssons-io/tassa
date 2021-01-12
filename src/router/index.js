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
			import(/* webpackChunkName: "aboutus" */ "../views/Match.vue")
	},
	{
		path: "/logga-in",
		name: "LogIn",
		component: () =>
			import(/* webpackChunkName: "login" */ "../views/LogIn.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
