import { RouteConfig } from 'vue-router';

export const titleRoutes: RouteConfig[] = [
  {
    path: '/title',
    name: 'title_search',
    component: () => import(/* webpackChunkName: "title" */ '@/components/title/Search.vue'),
  },
];
