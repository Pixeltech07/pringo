import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'default',
    component: () => import("../views/Login.vue")
  },
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/form',
    name:'file-form',
    component: () => import("../components/FileFormComponent.vue"),
    meta:{
      requiresAuth: true
    }
  },
  {
    path:'/success',
    name:'success',
    component:()=> import("../components/SuccessComponent.vue"),
    meta:{
      requiresAuth: true
    }
  },
  {
    path:'/profil',
    name:'profil',
    component:()=> import("../views/Profil.vue"),
    meta:{
      requiresAuth:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
