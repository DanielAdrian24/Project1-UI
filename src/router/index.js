import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import store from '../store/index.js'
// import Listuser from './components/Listuser/Listuser.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta: { hideNavigation: true },
    component: () => import('../components/Login/Login.vue'),
    home: false
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hideNavigation: true },
    component: () => import('../components/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { hideNavigation: true },
    component: () => import('../components/Login/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/Profile/Profile.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/user',
    name: 'Listuser',
    component: () => import('../components/Datatable/Listuser.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/createuser/:id',
    name: 'Create',
    component: () => import('../components/Create/Create.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: () => import('../components/Update/Update.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/createrole',
    name: 'Createrole',
    component: () => import('../components/Create/CreateRole.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/role',
    name: 'Listrole',
    component: () => import('../components/Datatable/Listrole.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/updaterole/:id',
    name: 'Updaterole',
    component: () => import('../components/Update/UpdateRole.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/customers',
    name: 'Listcustomers',
    component: () => import('../components/Datatable/Listcustomers.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/createcustomers/:id',
    name: 'Createcustomers',
    component: () => import('../components/Create/CreateCustomers.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/updatecustomers/:id',
    name: 'Updatecustomers',
    component: () => import('../components/Update/UpdateCustomers.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/menus',
    name: 'Listmenus',
    component: () => import('../components/Datatable/Listmenus.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/createmenus/:id',
    name: 'Createmenus',
    component: () => import('../components/Create/CreateMenus.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/updatemenus/:id',
    name: 'Updatemenus',
    component: () => import('../components/Update/UpdateMenus.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/menudetails',
    name: 'Listmenudetails',
    component: () => import('../components/Datatable/Listmenudetails.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/createmenudetails/:id',
    name: 'Createmenudetails',
    component: () => import('../components/Create/CreateMenuDetails.vue'),
    meta: {
      auth: true
    }
  },
   {
    path: '/updatemenudetails/:id',
    name: 'Updatemenudetails',
    component: () => import('../components/Update/UpdateMenuDetails.vue'),
    meta: {
      auth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.isLoggedIn && store.getters.user) {
      return next()
    }
    next('/login')
  }

  if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
      return next()
      
    }
    next('/user')
  }

  next()
})
export default router
