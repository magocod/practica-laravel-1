import { RouteConfig } from 'vue-router';

export const infoRoutes: RouteConfig[] = [
  {
    path: '/unefa',
    name: 'footer_unefa',
    component: () => import(/* webpackChunkName: "footer" */ '@/components/footer/Unefa.vue'),
  },
];
