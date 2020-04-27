import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";
import { SET_LOGOUT } from "../store/mutations-types";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.auth.isLogged)
        next();
      else
        next("/")
    }
  },
  {
    path: '/users',
    name: 'Users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "users" */ '../views/admin/Users.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.auth.isLogged && store.state.auth.user.role == "ADMIN_ROLE")
        next();
      else
        next("/")
    }
  },
  { path: "*", component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//verificacion del token antes de acceder a alguna ruta
router.beforeEach((to, from, next) => {
  if (store.state.auth.token != "") {
    let exp = parseJwtExp(store.state.auth.token);
    let current_time = new Date().getTime() / 1000;
    //expiro
    if (current_time > exp) {
      store.commit(SET_LOGOUT);
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
})

const parseJwtExp = (token) => {
  try {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64)).exp;
  } catch (error) {
    return false;
  }
};


export default router
