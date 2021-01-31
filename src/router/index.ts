import Vue from 'vue'
// import Home from '../views/Home.vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    // 默认进入根路径
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    // 404
    path: '*',
    component: NotFound
  },
];

const router = new VueRouter({
  routes
})

export default router
