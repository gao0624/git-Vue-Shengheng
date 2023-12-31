import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/index/Home.vue'
import userRoutes from './module/user';

Vue.use(VueRouter);

// ...的作用就是把对象给打散

const fullURL = window.location.href;
console.log(fullURL);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import ('@/views/contact/Contact.vue')
  },
  ...userRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) { // 判断是否需要登录
    // 判断用户是否登录
    if (store.state.userModule.token) {
      // 这里还要判断token的有效性，比如有没有过期，需要后台发放token的时候携带的有效期
      // 如果token无效，需要请求token
      next();
    } else {
      // 跳转登录
      router.push({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
