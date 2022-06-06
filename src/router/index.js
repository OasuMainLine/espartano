import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import PerfilView from "../views/PerfilView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/admin",
			name: "admin",
			component: AdminView,
		},
		{
			path: "/perfil",
			name: "perfil",
			component: PerfilView,
		},
	],
});

export default router;
