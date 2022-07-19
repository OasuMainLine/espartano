import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import PerfilView from "../views/PerfilView.vue";
import ContactView from "../views/ContactView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import HelpView from "../views/HelpView.vue";
import DevelopersView from "../views/DevelopersView.vue";
import TermsConditView from "../views/TermsConditView.vue";

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
		{
			path: "/contact",
			name: "contact",
			component: ContactView,
		},
		{
			path: "/about-us",
			name: "about-us",
			component: AboutUsView,
		},
		{
			path: "/help",
			name: "help",
			component: HelpView,
		},
		{
			path: "/developers",
			name: "developers",
			component: DevelopersView,
		},
		{
			path: "/termscondit",
			name: "terms&conditions",
			component: TermsConditView,
		},
	],
});

export default router;
