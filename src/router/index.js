import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('../views/NotFoundView.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/menu/:id',
    name: 'mealDetails',
    component: () => import('../views/MealDetailsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/OrderView.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/my-orders',
    name: 'myOrders',
    component: () => import('../views/MyOrdersView.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user.token) {
        if (store.state.auth.user.role !== "admin") {
          next({ name: 'notFound' });
        } else {
          next()
        }
      } else {
        next({ name: 'login' })
      }
    }
  },
  {
    path: '/meals',
    name: 'meals',
    component: () => import('../views/MealsView.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user.token) {
        if (store.state.auth.user.role !== "admin") {
          next({ name: 'notFound' });
        } else {
          next()
        }
      } else {
        next({ name: 'login' })
      }
    }
  },
  {
    path: '/update-meal/:id',
    name: 'updateMeal',
    component: () => import('../views/UpdateMealView.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user.token) {
        if (store.state.auth.user.role !== "admin") {
          next({ name: 'notFound' });
        } else {
          next()
        }
      } else {
        next({ name: 'login' })
      }
    }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/UsersView.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user.token) {
        if (store.state.auth.user.role !== "admin") {
          next({ name: 'notFound' });
        } else {
          next()
        }
      } else {
        next({ name: 'login' })
      }
    }
  },
  {
    path: '/update-user/:id',
    name: 'updateUser',
    component: () => import('../views/UpdateUserView.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user.token) {
        if (store.state.auth.user.role !== "admin") {
          next({ name: 'notFound' });
        } else {
          next()
        }
      } else {
        next({ name: 'login' })
      }
    }
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/OrdersView.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user.token) {
        if (store.state.auth.user.role !== "admin") {
          next({ name: 'notFound' });
        } else {
          next()
        }
      } else {
        next({ name: 'login' })
      }
    }
  },
  {
    path: '/update-order-status/:id',
    name: 'updateOrderStatus',
    component: () => import('../views/UpdateOrderStatusView.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (store.state.auth.user.token) {
        if (store.state.auth.user.role !== "admin") {
          next({ name: 'notFound' });
        } else {
          next()
        }
      } else {
        next({ name: 'login' })
      }
    }
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth && !store.state.auth.user.token) {
    next({ name: 'notFound' });
  } else {
    next()
  }
});

export default router
