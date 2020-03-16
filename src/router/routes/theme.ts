import { RouteConfig } from 'vue-router';

export const themeRoutes: RouteConfig[] = [
  {
    path: '/themes',
    name: 'theme_list',
    component: () => import(/* webpackChunkName: "theme" */ '@/components/theme/List.vue'),
  },
];
