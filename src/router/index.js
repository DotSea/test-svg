import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/modal',
    name: 'modal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Modal.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.afterEach((to) => {
  if (window.ga) {
    window.ga('set', { page: to.fullPath, anonymizeIp: true });
    window.ga('send', 'pageview');
  }
});
export default router;
