import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "login"*/ '../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'register',
		component: () => import(/* webpackChunkName: "register"*/ '../views/Register.vue'),
	},
	{
		path: '/',
		alias: '/dashboard',
		name: 'dashboard',
		component: Dashboard,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/about-us',
		name: 'about-us',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/points',
		name: 'points',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Points.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/community',
		name: 'community',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Community.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/profile',
		name: 'profile',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/:pathMatch(.*)*', //will match everything and put it under `$route.params.pathMatch`
		name: 'not-found',
		component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

// const store = this.$store.direct

router.beforeEach((to, from, next) => {
	if (to.meta?.requiresAuth) {
		if (!store.state.L_I) {
			next({
				name: 'login',
			})
		} else {
			next()
		}
	} else if (to.name == 'login') {
		if (store.state.L_I) {
			next({
				name: 'dashboard',
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router
