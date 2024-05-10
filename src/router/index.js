import { createWebHistory, createRouter } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "not-found",
		component: () => import("../views/404.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: "border-b border-indigo-50",
	linkExactActiveClass: "border-b border-indigo-50",
	routes,
});

router.beforeEach((to, from, next) => {
	AOS.init(); // Initialize AOS
	next();
});

export default router;
