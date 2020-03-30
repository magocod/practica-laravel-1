import Vue from 'vue';

import { RouteConfig } from 'vue-router';
import Router from 'vue-router';

import {
  authorRoutes,
  categoryRoutes,
  collectionRoutes,
  infoRoutes,
  titleRoutes,
  themeRoutes,
  resourceRoutes,
  recentRoutes,
} from './routes/public';

// eager loading
import {
  Home,
  LazyPublicAdmin,
  LazyError404,
} from '../views';

Vue.use(Router);

export interface RouteConfigExtend extends RouteConfig {
  fullpath?: string;
  LoadFunctionName?: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '*',
    component: LazyError404,
  },
  {
    path: '/public',
    name: 'public',
    component: LazyPublicAdmin,
    children: [
      // lazy loading
      ...authorRoutes,
      ...categoryRoutes,
      ...collectionRoutes,
      ...infoRoutes,
      ...titleRoutes,
      ...themeRoutes,
      ...resourceRoutes,
      ...recentRoutes,
    ],
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
