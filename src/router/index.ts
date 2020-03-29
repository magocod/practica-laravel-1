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
} from './routes';

// eager loading
import {
  Home,
  LazyError404,
} from '../views';

Vue.use(Router);

export interface RouteConfigExtend extends RouteConfig {
  fullpath?: string;
}

export const routes: RouteConfigExtend[] = [
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
    component: Home,
    children: [
      ...authorRoutes,
    ],
  },
  // lazy loading
  ...categoryRoutes,
  ...collectionRoutes,
  ...infoRoutes,
  ...titleRoutes,
  ...themeRoutes,
  ...resourceRoutes,
  ...recentRoutes,
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
