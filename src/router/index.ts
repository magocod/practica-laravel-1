import Vue from 'vue';

import { RouteConfig } from 'vue-router';
import Router from 'vue-router';

// rutas publicas
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
} from '@/views';

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '*',
    component: LazyError404,
  },
  // lazy loading
  ...authorRoutes,
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
  // directorio
  // base: __dirname,
  base: process.env.BASE_URL,
  // arreglo con ruta -> componente
  routes,
});

// exportar resultado de la configuracion
export default router;
