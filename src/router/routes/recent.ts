import { RouteConfig } from 'vue-router';

export const recentRoutes: RouteConfig[] = [
  {
    path: '/recents',
    name: 'recents',
    component: () => import(/* webpackChunkName: "recent" */ '@/components/recent/List.vue'),
  },
];
