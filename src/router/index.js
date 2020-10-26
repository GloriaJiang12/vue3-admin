import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: '首页',
      key: 1
    },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: "/practice",
    meta: {
      title: '练习',
      key: 'sub1'
    },
    redirect: "/practice/basic",
    children: [
      {
        path: "/practice/basic",
        name: 'Basic',
        meta: {
          title: '基础练习',
          key: 2
        },
        component: () => import('@/views/BasicItem/index.vue')
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
