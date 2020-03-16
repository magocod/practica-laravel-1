import { RouteConfig } from 'vue-router';

export const resourceRoutes: RouteConfig[] = [
  {
    path: '/resources/:key',
    name: 'resource_list',
    component: () => import(/* webpackChunkName: "resource" */ '@/components/resource/List.vue'),
  },
  {
    path: '/resource/:id',
    name: 'resource_detail',
    component: () => import(/* webpackChunkName: "resource" */ '@/components/resource/Detail.vue'),
  },
];
