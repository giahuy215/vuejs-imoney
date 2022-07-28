import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// Auth Guard
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  if(!user) next({ name: 'Login', params: {}})
  else next();
}

const routes = [
  {
    path: "/",
    name: "Index",
    meta: {
      text: "Hey, ",
      leading: true,
      isShowFooter: true,
      icon: "t2ico-notification"
    },
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/IndexView.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "My Profile",
      leading: false,
      isShowFooter: true,
      icon: "t2ico-setting"
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ProfileView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/LogoutView.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "My Report",
      leading: false,
      isShowFooter: true,
      icon: "t2ico-filter"
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/ReportView.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
      icon: "t2ico-presentation"
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/BudgetView.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New Transaction",
      leading: false,
      isShowFooter: true,
      icon: "t2ico-document"
    },
    component: () =>
      import(/* webpackChunkName: "transaction" */ "../views/NewTransactionView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
