import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import Test from '@/views/test.vue';
import App from '@/views/app.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/app',
    name: 'App',
    component: App,
  },
  // {
  //   path: '/axios',
  //   name: 'Axios',
  //   component: () => import('@/views/axios.vue') // 懒加载组件
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
