import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [
    // otherwise redirect to home
    { 
      path: '*',
      redirect: '/login'
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/Register.vue")
    },
    {
      path: "/list-user",
      name: "list-user",
      component: () => import("./components/ListUser.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register']; // pages can redirect wwithout token
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');
  if (authRequired && !loggedIn) {
    next('/login');
  } else next();
})
export default router;