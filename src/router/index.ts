import Vue from 'vue';
import Router from 'vue-router';

// rutas publicas
import title from '@/router/routes/title';
import category from '@/router/routes/category';
import info from '@/router/routes/info';
import theme from '@/router/routes/theme';
import collection from '@/router/routes/collection';
import resource from '@/router/routes/resource';
import author from '@/router/routes/author';
import recent from '@/router/routes/recent';

// eager loading
import Home from '@/views/Home.vue';
// import Error404 from '@/components/error/Error404.vue';

Vue.use(Router);

const baseroutes: any[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  // error 404
  {
    path: '*',
    component: () => import(/* webpackChunkName: "e404" */ '@/components/error/Error404.vue'),
    // component: Error404,
  },
];

// lazy loading
const routes = baseroutes.concat(
  title,
  category,
  info,
  theme,
  collection,
  resource,
  author,
  recent,
);
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
