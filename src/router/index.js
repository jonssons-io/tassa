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
		path: "/about",
        name: "AboutUs",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
        import(/* webpackChunkName: "aboutus" */ "../views/AboutUs.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
